import styled from '@emotion/styled';
import {
  ButtonProps,
  Checkbox,
  Flex,
  IconButton,
  ScrollArea,
  Text,
  Tooltip,
} from '@radix-ui/themes';
import { Node } from '@react-types/shared';
import React from 'react';
import { useRef } from 'react';
import {
  AriaButtonProps,
  mergeProps,
  useButton,
  useFocusRing,
  useGridList,
  useGridListItem,
  useGridListSelectionCheckbox,
} from 'react-aria';
import { Item, ListProps, ListState, useListData, useListState } from 'react-stately';

import SvgIcon from '@/components/common/SvgIcon';
import { isLayerVisible, useTopLevelLayers } from '@/lib/machines/layerManager/hooks/baseSelectors';

import { LayerManagerContext } from '../../layermanagement/LayerManagerProvider';
import { SewageMapLayerMachineActor } from '../../layermanagement/types';

const ListContainer = styled.ul`
  display: flex;
  list-style: none;
  flex-direction: column;
  gap: 0.5rem;
  padding-inline-start: 0;
  margin-block-start: 0;
  margin-block-end: 0;
`;

function List<T extends object>(props: ListProps<T>) {
  const state = useListState(props);
  const ref = useRef<HTMLUListElement | null>(null);
  const { gridProps } = useGridList(props, state, ref);

  return (
    <ListContainer {...gridProps} ref={ref} className="list">
      {[...state.collection].map((item) => (
        <ListItem key={item.key} item={item} state={state} />
      ))}
    </ListContainer>
  );
}

function ListButton(props: AriaButtonProps & ButtonProps) {
  const ref = useRef<HTMLButtonElement>(null);
  const { buttonProps } = useButton(props, ref);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { color, ...rest } = buttonProps;
  return <IconButton ref={ref} {...props} {...rest} />;
}

function ListCheckbox({ item, state }: { item: Node<object>; state: ListState<object> }) {
  const { checkboxProps } = useGridListSelectionCheckbox({ key: item.key }, state);

  return <Checkbox checked={checkboxProps.isSelected} onCheckedChange={checkboxProps.onChange} />;
}

const ListItemContainer = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem;
  padding-right: 1.5rem;
  width: 100%;
`;

const ListItemGridCell = styled.div`
  width: 100%;
`;

function ListItem<T extends object>({ item, state }: { item: Node<T>; state: ListState<T> }) {
  const ref = React.useRef(null);
  const { rowProps, gridCellProps, isPressed } = useGridListItem({ node: item }, state, ref);

  const { isFocusVisible, focusProps } = useFocusRing();

  return (
    <ListItemContainer
      {...mergeProps(rowProps, focusProps)}
      ref={ref}
      className={`${isPressed ? 'pressed' : ''} ${isFocusVisible ? 'focus-visible' : ''}`}
    >
      <ListItemGridCell {...gridCellProps}>
        <Flex align="center" gap="2" width="100%">
          <ListCheckbox item={item} state={state} />
          {item.rendered}
        </Flex>
      </ListItemGridCell>
    </ListItemContainer>
  );
}

type SelectAllProps = {
  isAllSelected: boolean;
  onSelectAll: (isSelected: boolean) => void;
};

const SelectAll = ({ isAllSelected, onSelectAll }: SelectAllProps) => (
  <Text as="label">
    <Flex align="center" gap="2" as="span">
      <Checkbox onCheckedChange={onSelectAll} checked={isAllSelected} />
      Select All
    </Flex>
  </Text>
);

export function LayerListFilter() {
  const actorRef = LayerManagerContext.useActorRef();
  const layers = useTopLevelLayers({ actor: actorRef });

  const visibleLayers = layers.filter((layer) => isLayerVisible(layer.layerActor));

  const list = useListData({
    initialItems: layers.map((layer) => layer.layerActor as SewageMapLayerMachineActor),
    initialSelectedKeys: visibleLayers.map((layer) => layer.layerActor.id),
    getKey: (item) => item.id,
  });

  const isAllSelected = list.selectedKeys === 'all' || list.selectedKeys.size === list.items.length;

  const onSelectAll = (isSelected: boolean) => {
    layers.forEach((layer) => {
      layer.layerActor.send({
        type: isSelected ? 'LAYER.ENABLED' : 'LAYER.DISABLED',
      });
    });
    list.setSelectedKeys(isSelected ? 'all' : new Set());
  };

  const focusItem = (item: SewageMapLayerMachineActor) => {
    // Disable all layers except the one being focused
    layers.forEach((layer) => {
      if (layer.layerActor.id !== item.id) {
        layer.layerActor.send({
          type: 'LAYER.DISABLED',
        });
      }
    });

    // Enable the focused layer if it's not already enabled
    if (!isLayerVisible(item)) {
      item.send({
        type: 'LAYER.ENABLED',
      });
    }

    // Update selection state to match
    list.setSelectedKeys(new Set([item.id]));
  };

  return (
    <Flex direction="column" gap="2">
      <SelectAll isAllSelected={isAllSelected} onSelectAll={onSelectAll} />
      <ScrollArea type="always" scrollbars="vertical" style={{ height: 140 }}>
        <List
          aria-label="Example List"
          selectionMode="multiple"
          items={list.items}
          selectedKeys={list.selectedKeys}
          onSelectionChange={(keys) => {
            if (keys === 'all') {
              onSelectAll(true);
            } else if (keys instanceof Set) {
              // Disable all layers first
              layers.forEach((layer) => {
                layer.layerActor.send({
                  type: 'LAYER.DISABLED',
                });
              });
              // Enable only selected layers
              layers.forEach((layer) => {
                if (keys.has(layer.layerActor.id)) {
                  layer.layerActor.send({
                    type: 'LAYER.ENABLED',
                  });
                }
              });
            }
            list.setSelectedKeys(keys);
          }}
        >
          {(item) => (
            <Item key={item.id} textValue={item.id}>
              <Flex align="center" gap="2" width="100%" justify={'between'}>
                {item.id}
                <Tooltip content="Focus" side="bottom" delayDuration={700}>
                  <ListButton
                    variant="ghost"
                    size="2"
                    radius="small"
                    aria-label="Focus"
                    onClick={() => focusItem(item)}
                  >
                    <SvgIcon name="icon-current-location" size={20} />
                  </ListButton>
                </Tooltip>
              </Flex>
            </Item>
          )}
        </List>
      </ScrollArea>
    </Flex>
  );
}

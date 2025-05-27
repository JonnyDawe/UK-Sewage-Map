import { ButtonProps, Checkbox, Flex, IconButton, Text } from '@radix-ui/themes';
import { Node } from '@react-types/shared';
import React, { useRef } from 'react';
import {
  AriaButtonProps,
  mergeProps,
  useButton,
  useFocusRing,
  useGridList,
  useGridListItem,
  useGridListSelectionCheckbox,
} from 'react-aria';
import { ListProps, ListState, useListState } from 'react-stately';

import { ListContainer, ListItemContainer, ListItemGridCell } from './styles';

export function List<T extends object>(props: ListProps<T>) {
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

export function ListButton(props: AriaButtonProps & ButtonProps) {
  const ref = useRef<HTMLButtonElement>(null);
  const { buttonProps } = useButton(props, ref);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { color, ...rest } = buttonProps;
  return <IconButton ref={ref} {...props} {...rest} />;
}

function ListCheckbox({ item, state }: { item: Node<object>; state: ListState<object> }) {
  const { checkboxProps } = useGridListSelectionCheckbox({ key: item.key }, state);
  return <Checkbox checked={checkboxProps.isSelected} />;
}

export function ListItem<T extends object>({
  item,
  state,
}: {
  item: Node<T>;
  state: ListState<T>;
}) {
  const ref = React.useRef(null);
  const { rowProps, gridCellProps, isPressed, isSelected } = useGridListItem(
    { node: item },
    state,
    ref,
  );

  const { isFocusVisible, focusProps } = useFocusRing();

  return (
    <ListItemContainer
      {...mergeProps(rowProps, focusProps)}
      ref={ref}
      $isSelected={isSelected}
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

type ToggleAllLayersProps = {
  isAllSelected: boolean;
  onSelectAll: (isSelected: boolean) => void;
};

export function ToggleAllLayers({ isAllSelected, onSelectAll }: ToggleAllLayersProps) {
  return (
    <Text as="label">
      <Flex align="center" gap="2" as="span">
        <Checkbox onCheckedChange={onSelectAll} checked={isAllSelected} />
        Show All Layers
      </Flex>
    </Text>
  );
}

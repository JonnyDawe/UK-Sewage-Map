import { Box, Flex, ScrollArea, Separator } from '@radix-ui/themes';
import { Item } from 'react-stately';

import SvgIcon from '@/components/common/SvgIcon';

import { List, ListButton, ToggleAllLayers } from './ListComponents';
import { useLayerManagement } from './useLayerManagement';

export function LayerListFilter() {
  const { list, isAllSelected, handleSelectAll, handleFocusItem, handleSelectionChange } =
    useLayerManagement();

  return (
    <Flex direction="column" gap="2">
      <ToggleAllLayers isAllSelected={isAllSelected} onSelectAll={handleSelectAll} />
      <Separator size={'4'} orientation="horizontal" />
      <ScrollArea type="always" scrollbars="vertical" style={{ height: 140 }}>
        <Box mr={'4'}>
          <List
            aria-label="Layer List"
            selectionMode="multiple"
            items={list.items}
            selectedKeys={list.selectedKeys}
            onSelectionChange={handleSelectionChange}
          >
            {(item) => (
              <Item key={item.id} textValue={item.id}>
                <Flex align="center" gap="2" width="100%" justify={'between'}>
                  {item.id}
                  <ListButton
                    variant="ghost"
                    size="2"
                    radius="small"
                    aria-label="Focus"
                    onClick={() => handleFocusItem(item)}
                  >
                    <SvgIcon name="icon-current-location" size={20} />
                  </ListButton>
                </Flex>
              </Item>
            )}
          </List>
        </Box>
      </ScrollArea>
    </Flex>
  );
}

import React from 'react';
import { ListRenderItemInfo, StyleSheet, View } from 'react-native';
import { Button, Datepicker, Divider, Icon, Input, Layout, List, Text, Toggle, TopNavigation, TopNavigationAction } from '@ui-kitten/components';
import { SafeAreaLayout } from '../../components/safe-area-layout.component';
import { MenuIcon } from '../../components/icons';
import { Product } from './extra/data';
import { CartItem } from './extra/cart-item.component';

const initialProducts: Product[] = [
  Product.boneLess(),
  Product.withBone()
];

export const MeatScene = (props): React.ReactElement => {

  
  const [date, setDate] = React.useState(new Date());
  const [products, setProducts] = React.useState<Product[]>(initialProducts);
  const [value, setValue] = React.useState('');
  
  const renderDrawerAction = (): React.ReactElement => (
    <TopNavigationAction
      icon={MenuIcon}
      onPress={props.navigation.toggleDrawer}
    />
  );

  const renderDateAction = () : React.ReactElement => (
    <Datepicker
        date={date}
        disabled
        onSelect={nextDate => setDate(nextDate)}
      />
  );

  const renderProductItem = (info: ListRenderItemInfo<Product>): React.ReactElement => (
    <CartItem
      style={styles.item}
      index={info.index}
      product={info.item}
    />
  );

  return (
    <SafeAreaLayout
      style={styles.safeArea}
      insets='top'>
      <TopNavigation
        title='SK MEATS'
        subtitle= 'Mutton'
        leftControl={renderDrawerAction()}
        rightControls={renderDateAction()}
      />
      <Divider/>
      <View style={{flexDirection: 'row',justifyContent: 'space-between'}}>
        <Input
              value={value}
              status='primary'
              style={styles.headerAlign}
              placeholder='Time 24 Hrs'
              onChangeText={nextValue => setValue(nextValue)}
        />
        <Toggle
            style={styles.leftAlign}
            status='success'>
        </Toggle>
      </View>
      {/* <MenuGridList
        data={data}
        onItemPress={onItemPress}
      /> */}
      <List
        data={products}
        renderItem={renderProductItem}
      />
      <Button
        style={styles.checkoutButton}
        size='giant'>
        Save
      </Button>
    </SafeAreaLayout>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  checkoutButton: {
    marginHorizontal: 16,
    marginVertical: 24,
  },
  detailsContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  item: {
    borderBottomWidth: 1,
    borderBottomColor: 'background-basic-color-3',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 0.5,
    paddingVertical: 28,
    paddingHorizontal: 16,
  },
  headerAlign: {
    width:120
  },
  leftAlign: {
    
  }
});

import React from 'react';
import { ListRenderItemInfo, StyleSheet, View } from 'react-native';
import { Button, List, Text, TopNavigation, TopNavigationAction } from '@ui-kitten/components';
import { SafeAreaLayout } from '../../components/safe-area-layout.component';
import { ArrowIosBackIcon } from '../../components/icons';
import { Product } from '../meat-order/extra/data';
import { CartItem } from '../../layouts/waiting-order/extra/cart-item.component';


const initialProducts: Product[] = [
    Product.boneLess(),
    Product.withBone()
  ];

export const OrderHistoryScreen = ({ navigation }): React.ReactElement => {

  const renderBackAction = (): React.ReactElement => (
    <TopNavigationAction
      icon={ArrowIosBackIcon}
      onPress={navigation.goBack}
    />
  );

  const [products, setProducts] = React.useState<Product[]>(initialProducts);

  const renderProductItem = (info: ListRenderItemInfo<Product>): React.ReactElement => (
    <CartItem
      style={styles.item}
      index={info.index}
      product={info.item}
    />
  );

  return (
    <SafeAreaLayout
      style={styles.container}
      insets='top'>
      <TopNavigation
        title='Order Details'
        leftControl={renderBackAction()}
      />
       <View style={{flexDirection: 'row',justifyContent: 'space-between',
                marginHorizontal:16,marginVertical:16 , borderLeftWidth:3 , borderLeftColor: 'blue'}}>
        <Text style={{marginLeft:5}} category='s1'>
          Order Id: 123243543
        </Text>
        <Text style={{margin:2}} category='s1'>
          Total: 1212
        </Text>
      </View>
      <List
        style={{margin:5}}
        data={products}
        renderItem={renderProductItem}
      />
      <Button
        style={styles.checkoutButton}
        size='giant'>
        Notify
      </Button>
    </SafeAreaLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    margin:2,
    borderBottomWidth: 1,
    borderBottomColor: 'background-basic-color-3',
  },
  checkoutButton: {
    marginHorizontal: 5,
    marginVertical: 5,
 },
});

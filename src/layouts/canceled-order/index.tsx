import React from 'react';
import { ListRenderItemInfo, StyleSheet, View } from 'react-native';
import { Button, Datepicker, Divider, Icon, Input, Layout, List, ListItem, Text, Toggle, TopNavigation, TopNavigationAction } from '@ui-kitten/components';
import { SafeAreaLayout } from '../../components/safe-area-layout.component';
import { MenuIcon ,ArrowIosForwardIcon,ArrowIosBackIcon, CloseIcon ,SuccessIcon} from '../../components/icons';
import { Product } from './../../model/product-item';

const initialProducts: Product[] = [
  Product.boneLess(),
  Product.withBone()
];
const orderArray = new Array(8).fill({
    title: 'OrderId: 12121234342',
    description: 'Total: 350'
});


export default ({ navigation }): React.ReactElement => {

  
  const [date, setDate] = React.useState(new Date());
  const [products, setProducts] = React.useState<Product[]>(initialProducts);
  const [value, setValue] = React.useState('');


  const renderDrawerAction = (): React.ReactElement => (
    <TopNavigationAction
      icon={MenuIcon}
      onPress={navigation.toggleDrawer}
    />
  );

  const renderItemAccessory = (props) => (
    <Button
        appearance='ghost' status='primary'
        icon={ArrowIosForwardIcon}
        onPress={onItemPress}
    />
  );

  const renderItemIcon = (props) => (
    <Icon {...props} name='person'/>
  );

  const onItemPress = (event): void => {
    navigation.navigate('order-history');
  };

  const renderItem = ({ item, index }) => (
    <ListItem
      title={item.title}
      description={item.description}
      icon={renderItemIcon}
      accessory={renderItemAccessory}
    />
  );

  return (
    <SafeAreaLayout
      style={styles.safeArea}
      insets='top'>
      <TopNavigation
        title='SK MEATS'
        subtitle= 'Canceled Order'
        leftControl={renderDrawerAction()}
      />
      <Divider/>
      <View style={{flexDirection: 'row',justifyContent: 'space-between',
                marginHorizontal:16,marginVertical:16 , borderLeftWidth:3 , borderLeftColor: 'blue'}}>
        <Text style={{margin:4}} category='s1'>
          Canceled Order
        </Text>
        <View style={{flexDirection:"row" ,right:0}}>
          <Button
            size='tiny'
            icon={ArrowIosBackIcon}
            appearance='outline' status='success'
          />
          <Text
            style={styles.page}
            category='s2'>
                10 / 10
          </Text>
          <Button
            size='tiny'
            appearance='outline' status='success'
            icon={ArrowIosForwardIcon}
          />
        </View>
      </View>
      {/* <List
        style={{margin:5}}
        data={products}
        renderItem={renderProductItem}
      /> */}
       <List
        data={orderArray}
        renderItem={renderItem}
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
  safeArea: {
    flex: 1,
  },
  checkoutButton: {
     marginHorizontal: 5,
     marginVertical: 5,
  },
  detailsContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  item: {
    margin:2,
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
  iconButton: {
    paddingHorizontal: 0
  },
  page: {
    textAlign: 'center',
    width: 60,
    height: 30,
  },
  amountButton: {
    borderRadius: 16,
  },
});

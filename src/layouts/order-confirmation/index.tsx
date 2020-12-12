import React from 'react';
import { ListRenderItemInfo, StyleSheet, View } from 'react-native';
import { Button, Datepicker, Divider, Icon, Input, Layout, List, Text, Toggle, TopNavigation, TopNavigationAction } from '@ui-kitten/components';
import { SafeAreaLayout } from '../../components/safe-area-layout.component';
import { MenuIcon ,ArrowIosForwardIcon,ArrowIosBackIcon, CloseIcon ,SuccessIcon} from '../../components/icons';
import { Product } from './extra/data';
import { OrderResultCardItem } from '../../components/order-result-card-item';

const initialProducts: Product[] = [
  Product.boneLess(),
  Product.withBone()
];

export default ({ navigation }): React.ReactElement => {

  
  const [date, setDate] = React.useState(new Date());
  const [products, setProducts] = React.useState<Product[]>(initialProducts);
  const [value, setValue] = React.useState('');


  const renderPageAction = () : React.ReactElement => (
    <View style={{flexDirection:"row" ,right:0}}>
          <Button
            size='tiny'
            icon={ArrowIosBackIcon}
            appearance='outline' status='success'
          />
          <Text
            style={styles.page}
            category='s2'>
                1 / 100
          </Text>
          <Button
            size='tiny'
            appearance='outline' status='success'
            icon={ArrowIosForwardIcon}
          />
    </View>
  );

  const renderProductItem = (info: ListRenderItemInfo<Product>): React.ReactElement => (
    <OrderResultCardItem
      style={styles.item}
      index={info.index}
      product={info.item}
    />
  );

  return (
    <Layout style={styles.safeArea}>
      <Divider/>
      <View style={{flexDirection: 'row',justifyContent: 'space-between',
                marginHorizontal:16,marginVertical:16 , borderLeftWidth:3 , borderLeftColor: 'blue'}}>
        <Text style={{marginLeft:5}} category='s1'>
          Order Id: 123243543
        </Text>
        <Text style={{margin:2}} category='s1'>
          Total: 1212
        </Text>
      </View>
      <View style={{flexDirection:"row", justifyContent:'flex-end'}}>
        <Button
          status='success' 
          style={styles.checkoutButton}
          icon={SuccessIcon}
        >
            Accept
        </Button>
        <Button
          status='danger'
          icon={CloseIcon}
          style={styles.checkoutButton}>
            Reject
        </Button>
      </View>
      <List
        style={{margin:5}}
        data={products}
        renderItem={renderProductItem}
      />
    </Layout>
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

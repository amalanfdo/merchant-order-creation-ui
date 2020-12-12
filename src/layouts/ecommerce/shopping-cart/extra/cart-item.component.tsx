import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { Button, Icon, Input, ListItem, ListItemProps, Text, Toggle } from '@ui-kitten/components';
import { CloseIcon, MinusIcon, PlusIcon } from './icons';
import { Product } from './data';

export type CartItemProps = ListItemProps & {
  index: number;
  product: Product;
  onProductChange: (product: Product, index: number) => void;
  onRemove: (product: Product, index: number) => void;
};

const useToggleState = (initialState = false) => {
  const [checked, setChecked] = React.useState(initialState);

  const onCheckedChange = (isChecked) => {
    setChecked(isChecked);
  };

  return { checked, onChange: onCheckedChange };
};

export const CartItem = (props: CartItemProps): React.ReactElement => {

  const { style, product, index, ...listItemProps } = props;

  const successToggleState = useToggleState();

  const [value, setValue] = React.useState('');

  const renderIcon = (props) => (
      <Icon {...props} name= 'eye'/>
  );
  
  return (
    <ListItem
      {...listItemProps}
      style={[styles.container, style]}>
      <Image
        style={styles.image}
        source={product.image}
      />
      <View style={{flex: 1, flexDirection: 'column'}}>
        <View style={styles.detailsContainer}>
          <Text
            category='s1'>
            {product.title}
          </Text>
          <Toggle
          status='success'
          {...successToggleState}>
        </Toggle>
      </View>
        <Text
          style={styles.descriptionContainer}
          appearance='hint'
          category='p2'>
          {product.subtitle}
        </Text>
      </View>
      <Input
            value={value}
            status='primary'
            style={styles.amountAlign}
            placeholder='Amount'
            onChangeText={nextValue => setValue(nextValue)}
      />
    </ListItem>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-start',
    paddingHorizontal: 0,
    paddingVertical: 0,
  },
  image: {
    width: 120,
    height: 144,
  },
  detailsContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding:5,
  },
  descriptionContainer: {
    padding:5,
  },
  amountAlign:{
   width: 120,
   margin: 2,
   position: 'absolute',
   bottom:0,
   right:0
  }
});

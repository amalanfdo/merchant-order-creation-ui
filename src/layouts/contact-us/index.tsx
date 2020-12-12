import React from 'react';
import {
  Button,
    Divider,
  Icon,
  List,
  ListItem,
  Text,
  TopNavigation,
  TopNavigationAction,
} from '@ui-kitten/components';
import { SafeAreaLayout } from '../../components/safe-area-layout.component';
import { StyleSheet, View } from 'react-native';
import { MenuIcon } from '../../components/icons';

const peopleInformation = [{
  title: 'Alyo',
  description: 'Business Analyst',
},
{
  title: 'Mohhammed Ariff',
  description: 'Business Analyst',
},
{
    title: 'Amalan T',
    description: 'Developer',
}  
];

export default ({ navigation }): React.ReactElement => {

  const renderItemAccessory = (style) => (
    <Button style={style} >Call</Button>
  );

  const renderItemIcon = (style) => (
    <Icon {...style} name='person'/>
  );

  const renderDrawerAction = (): React.ReactElement => (
    <TopNavigationAction
      icon={MenuIcon}
      onPress={navigation.toggleDrawer}
    />
  );
  
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
        subtitle= 'Contact Us'
        leftControl={renderDrawerAction()}
      />
      <Divider/>
      <View style={{
                marginHorizontal:16,marginVertical:16 , borderLeftWidth:3 , borderLeftColor: 'blue'}}>
        <Text style={{margin:4}} category='s1'>
          Contact Us
        </Text>
      </View>
      {/* <List
        style={{margin:5}}
        data={products}
        renderItem={renderProductItem}
      /> */}
       <List
        data={peopleInformation}
        renderItem={renderItem}
        />
        <Text style={{
                marginHorizontal:16,marginVertical:16 , borderLeftWidth:3 , borderLeftColor: 'blue'}} category='s1'>
          FAQ
        </Text>
    </SafeAreaLayout>
  );
};

const styles = StyleSheet.create({
    safeArea: {
      flex: 1,
    },
});  
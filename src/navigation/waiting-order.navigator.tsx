import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { WaitingOrder } from '../scenes/waiting-order/waiting-order.scene';
import { OrderConfirmation } from '../scenes/waiting-order/order-confirmation.scene';

const TopTab = createMaterialTopTabNavigator();
const Stack = createStackNavigator();

export const WaitingOrderNavigator = (): React.ReactElement => (
  <Stack.Navigator headerMode='none'>
    <Stack.Screen name='revenue' component={WaitingOrder}/>
    <Stack.Screen name='order-confirmation' component={OrderConfirmation}/>
  </Stack.Navigator>
);

import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Revenue } from './../scenes/revenue/revenue.component';
import { OrderHistoryScreen } from './../scenes/revenue/order-history-screen.component';
import { WaitingOrder } from './../scenes/waiting-order/waiting-order.component';
import { OrderConfirmation } from './../scenes/waiting-order/order-confirmation.component';

const TopTab = createMaterialTopTabNavigator();
const Stack = createStackNavigator();

export const WaitingOrderNavigator = (): React.ReactElement => (
  <Stack.Navigator headerMode='none'>
    <Stack.Screen name='revenue' component={WaitingOrder}/>
    <Stack.Screen name='order-confirmation' component={OrderConfirmation}/>
  </Stack.Navigator>
);

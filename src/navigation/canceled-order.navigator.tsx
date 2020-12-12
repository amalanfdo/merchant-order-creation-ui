import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Revenue } from './../scenes/revenue/revenue.component';
import { OrderHistoryScreen } from './../scenes/revenue/order-history-screen.component';
import { CanceledOrder } from './../scenes/canceled-order/canceled-order.component';

const TopTab = createMaterialTopTabNavigator();
const Stack = createStackNavigator();

export const CanceledOrderNavigator = (): React.ReactElement => (
  <Stack.Navigator headerMode='none'>
    <Stack.Screen name='canceled-order' component={CanceledOrder}/>
    <Stack.Screen name='order-history' component={OrderHistoryScreen}/>
  </Stack.Navigator>
);

import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Revenue } from './../scenes/revenue/revenue.component';
import { OrderHistoryScreen } from './../scenes/revenue/order-history-screen.component';

const TopTab = createMaterialTopTabNavigator();
const Stack = createStackNavigator();

export const OrderHistory = (): React.ReactElement => (
  <Stack.Navigator headerMode='none'>
    <Stack.Screen name='revenue' component={Revenue}/>
    <Stack.Screen name='order-history' component={OrderHistoryScreen}/>
  </Stack.Navigator>
);

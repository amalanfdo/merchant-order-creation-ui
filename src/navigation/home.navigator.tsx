import React from 'react';
import { RouteProp } from '@react-navigation/core';
import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { HomeBottomNavigation } from '../scenes/home/home-bottom-navigation.component';
import { HomeDrawer } from '../scenes/home/home-drawer.component';
import { MeatScene } from '../scenes/meat-order/meat-scene';
import { ChickenScene } from '../scenes/meat-order/chicken-scene';
import { FishScene } from '../scenes/meat-order/fish-scene';
import { WaitingOrder } from '../scenes/waiting-order/waiting-order.scene';
import { OrderHistory } from './order-history.navigator';
import { WaitingOrderNavigator } from './waiting-order.navigator';
import { CanceledOrderNavigator } from './canceled-order.navigator';
import { ContactUs } from '../scenes/contact-us/contact-us.component';

const BottomTab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

/*
 * When dev is true in .expo/settings.json (started via `start:dev`),
 * open Components tab as default.
 */
const initialTabRoute: string = __DEV__ ? 'Meat' : 'Chicken'; // how dev works 

/*
 * Can we access it from `HomeNavigator`?
 */
const ROOT_ROUTES: string[] = ['Home', 'Meat', 'Chicken', 'Fish'];

const isOneOfRootRoutes = (currentRoute: RouteProp<any, any>): boolean => {
  return ROOT_ROUTES.find(route => currentRoute.name === route) !== undefined;
};

const TabBarVisibleOnRootScreenOptions = ({ route }): BottomTabNavigationOptions => {
  const currentRoute = route.state && route.state.routes[route.state.index];
  return { tabBarVisible: currentRoute && isOneOfRootRoutes(currentRoute) };
};

const HomeTabsNavigator = (): React.ReactElement => (
  <BottomTab.Navigator
    screenOptions={TabBarVisibleOnRootScreenOptions}
    initialRouteName={initialTabRoute}
    tabBar={props => <HomeBottomNavigation {...props} />}>
    <BottomTab.Screen name='Meat' component={MeatScene}/>
    <BottomTab.Screen name='Chicken' component={ChickenScene}/>
    <BottomTab.Screen name='Fish' component={FishScene}/>
  </BottomTab.Navigator>
);

export const HomeNavigator = (): React.ReactElement => (
  <Drawer.Navigator
    screenOptions={{ gestureEnabled: false }}
    drawerContent={props => <HomeDrawer {...props}/>}>
    <Drawer.Screen name='menu_creation' component={HomeTabsNavigator}/>
    <Drawer.Screen name='waiting_queue' component={WaitingOrderNavigator}/>
    <Drawer.Screen name='day_revenue' component={OrderHistory} />
    <Drawer.Screen name='order_canceled' component={CanceledOrderNavigator} />
    <Drawer.Screen name='contact_us' component={ContactUs} />
    {/* <Drawer.Screen name='order_autocreation' component={LibrariesScreen} /> */}
    <Drawer.Screen name='Login' component={OrderHistory}/>  
    <Drawer.Screen name='Logout' component={OrderHistory}/>
  </Drawer.Navigator>
);

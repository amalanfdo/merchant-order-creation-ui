import React from 'react';
import { StyleSheet, View } from 'react-native';
import {
  Avatar,
  Divider,
  Drawer,
  DrawerElement,
  DrawerHeaderElement,
  DrawerHeaderFooter,
  DrawerHeaderFooterElement,
  Layout,
  MenuItemType,
  Text,
  Toggle,
} from '@ui-kitten/components';
import { BookIcon, GithubIcon } from '../../components/icons';
import { SafeAreaLayout } from '../../components/safe-area-layout.component';
import { WebBrowserService } from '../../services/web-browser.service';
import { AppInfoService } from '../../services/app-info.service';
import { ThemeContextValue, Theming } from '../../services/theme.service';

const DATA: MenuItemType[] = [
  { title: 'Todays Menu', icon: GithubIcon },
  { title: 'Waiting Order', icon: BookIcon },
  { title: 'Revenue', icon: GithubIcon },
  {title: 'Canceled Order', icon: GithubIcon},
  // { title: 'Order AutoCreation', icon: BookIcon },
  {title: 'Contact Us' , icon: GithubIcon},
  { title: 'Login', icon: GithubIcon },
  { title: 'Logout', icon: BookIcon },
];

const version: string = AppInfoService.getVersion();

export const HomeDrawer = ({ navigation }): DrawerElement => {

  const themeContext: ThemeContextValue = React.useContext(Theming.ThemeContext);

  const onItemSelect = (index: number): void => {
    switch (index) {
      case 0: {
        navigation.toggleDrawer();
        navigation.navigate('menu_creation');
        return;
      }
      case 1: {
        navigation.toggleDrawer();
        navigation.navigate('waiting_queue');
        return;
      }
      case 2: {
        navigation.toggleDrawer();
        navigation.navigate('day_revenue');
        return;
      }
      case 3: {
        navigation.toggleDrawer();
        navigation.navigate('order_canceled');
        return;
      }
      case 4: {
        navigation.toggleDrawer();
        navigation.navigate('contact_us');
        return;
      }
    }
  };
  const [checked, setChecked] = React.useState(false);

  const onCheckedChange = (isChecked) => {
    setChecked(isChecked);
    if(isChecked)
      themeContext.setCurrentTheme('light');
    else
      themeContext.setCurrentTheme('dark');
  };

  const renderMode = (style) => (
    <Toggle
      status='primary'
      checked={checked}
      onChange={onCheckedChange}>
    </Toggle>
  );

  const renderHeader = (): DrawerHeaderElement => (
    <Layout
      style={styles.header}
      level='2'>
      <View style={styles.profileContainer}>
        <Avatar
          size='giant'
          source={require('../../assets/images/image-app-icon.png')}
        />
        <Text
          style={styles.profileName}
          category='h6'>
          SK Meats
        </Text>
      </View>
    </Layout>
  );

  const renderFooter = (): DrawerHeaderFooterElement => (
    <React.Fragment>
      <Divider/>
      <DrawerHeaderFooter
        disabled={true}
        title="Switch Mode"
        description={`Version ${AppInfoService.getVersion()}`}
        accessory={renderMode}
      />
    </React.Fragment>
  );

  return (
    <SafeAreaLayout
      style={styles.safeArea}
      insets='top'>
      <Drawer
        header={renderHeader}
        footer={renderFooter}
        data={DATA}
        onSelect={onItemSelect}
      />
    </SafeAreaLayout>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  header: {
    height: 128,
    paddingHorizontal: 16,
    justifyContent: 'center',
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileName: {
    marginHorizontal: 16,
  },
});

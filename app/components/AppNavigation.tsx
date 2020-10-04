import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useTheme } from '@react-navigation/native';
import * as React from 'react';
import { Icon } from 'react-native-elements';
import { Home } from './Home';
import { Settings } from './Settings';

const Tab = createBottomTabNavigator();

export function AppNavigation() {
  const theme = useTheme();

  return (
    <Tab.Navigator
    // tabBarOptions={{
    //   activeTintColor: theme.colors.primary,
    //   activeBackgroundColor: '#000',
    // }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Icon name={'home'} color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarLabel: 'Settings',
          tabBarIcon: ({ color, size }) => (
            <Icon name={'sliders-h'} color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

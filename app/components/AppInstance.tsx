import { createStackNavigator } from '@react-navigation/stack';
import React, { useEffect } from 'react';
import { connect } from '../core/udp';
import { createInstance } from '../createInstance';
import { StateContext } from '../stateContext';
import { RootStackParamList } from '../types/types';
import { NavigationContainer } from '@react-navigation/native';
import { Home } from './Home';
import { Settings } from './Settings';

const Root = createStackNavigator<RootStackParamList>();

export function AppInstance({ instance = createInstance(), children = [] }) {
  const { options, decode } = instance;
  useEffect(() => {
    return connect({ port: options.udpPort }, (msg: Buffer) => {
      console.log('Message received: ', decode(msg));
    });
  }, []);
  return (
    <StateContext.Provider value={instance.context}>
      <NavigationContainer>
        <Root.Navigator>
          <Root.Screen name="Home" component={Home} />
          <Root.Screen name="Settings" component={Settings} />
        </Root.Navigator>
      </NavigationContainer>
    </StateContext.Provider>
  );
}

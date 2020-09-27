import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, { useEffect } from 'react';
import { StateContext } from './appContext';
import { Home } from './components/Home';
import { Settings } from './components/Settings';
import { connect } from './core/udp';
import { AppInstance, createInstance } from './createInstance';
import { RootStackParamList } from './types/types';

const Root = createStackNavigator<RootStackParamList>();

export default function App(instance: AppInstance = createInstance()) {
  const { options = { mavlink: { udpPort: 0 } } } = instance;
  useEffect(() => {
    return connect({ port: options.mavlink.udpPort }, (msg: Buffer) => {
      console.log('Message received: ', instance.decode(msg));
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

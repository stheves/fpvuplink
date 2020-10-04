import { NavigationContainer } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { View } from 'react-native';
import { Header, ThemeProvider } from 'react-native-elements';
import { connect } from '../core/udp';
import { createInstance } from '../createInstance';
import { StateContext } from '../stateContext';
import { AppNavigation } from './AppNavigation';
import { theme } from './theme';

export function AppInstance({ instance = createInstance(), children = [] }) {
  const { options, decode } = instance;
  useEffect(() => {
    return connect({ port: options.udpPort }, (msg: Buffer) => {
      console.log('Message received: ', decode(msg));
    });
  }, []);
  return (
    <StateContext.Provider value={instance.context}>
      <ThemeProvider theme={theme}>
        <NavigationContainer>
          <View style={{ flex: 1 }}>
            <Header centerComponent={{ text: 'FPV Uplink' }} />
            <AppNavigation />
          </View>
        </NavigationContainer>
      </ThemeProvider>
    </StateContext.Provider>
  );
}

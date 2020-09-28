import React, { useEffect } from 'react';
import { ThemeProvider } from 'react-native-elements';
import { connect } from '../core/udp';
import { createInstance } from '../createInstance';
import { StateContext } from '../stateContext';
import { Home } from './Home';
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
      <ThemeProvider
        theme={theme}
        // useDark={options.theme?.colorScheme === 'dark'}
      >
        <Home />
      </ThemeProvider>
    </StateContext.Provider>
  );
}

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { StateContext, createDefaultContext } from './appContext';
import { Settings } from './components/Settings';
import { RootStackParamList } from './types/components';
import { GlobalContext } from './appContext';
import { useState } from 'react';
import { Home } from './components/Home';

const Root = createStackNavigator<RootStackParamList>();

export default function App() {
  const context = useState<GlobalContext>(createDefaultContext());
  return (
    <StateContext.Provider value={context}>
      <NavigationContainer>
        <Root.Navigator>
          <Root.Screen name="Home" component={Home} />
          <Root.Screen name="Settings" component={Settings} />
        </Root.Navigator>
      </NavigationContainer>
    </StateContext.Provider>
  );
}

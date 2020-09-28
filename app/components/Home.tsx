import React from 'react';
import { Header } from 'react-native-elements';
import { Props } from '../types/types';

export const Home = ({ navigation, route }: Props) => (
  <Header
    leftComponent={{ icon: 'menu', color: '#fff' }}
    centerComponent={{ text: 'FPV Uplink', style: { color: '#fff' } }}
    rightComponent={{ icon: 'home', color: '#fff' }}
    containerStyle={{
      backgroundColor: '#3D6DCC',
      justifyContent: 'space-around',
    }}
  />
);

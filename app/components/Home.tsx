import React from 'react';
import { Button, Text, View } from 'react-native';
import { Props } from '../types/types';
import { styles } from '../styles';

export const Home = ({ navigation, route }: Props) => (
  <View style={styles.screen}>
    <Text style={styles.title}>Home</Text>
    <Button
      title="Go to Settings"
      onPress={() => {
        navigation.push('Settings');
      }}
    />
  </View>
);

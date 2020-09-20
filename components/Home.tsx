import React from 'react';
import { Button, Text, View } from 'react-native';
import { Props } from '../types/components';
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

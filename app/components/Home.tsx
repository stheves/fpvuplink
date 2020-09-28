import React from 'react';
import { View } from 'react-native';
import { Header, Icon, ListItem } from 'react-native-elements';

export const Home = () => (
  <View>
    <Header centerComponent={{ text: 'FPV Uplink' }} />
    <ListItem bottomDivider>
      <Icon name={'cog'} />
      <ListItem.Content>
        <ListItem.Title>Settings</ListItem.Title>
      </ListItem.Content>
    </ListItem>
  </View>
);

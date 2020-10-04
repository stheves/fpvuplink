import React from 'react';
import { View } from 'react-native';
import { Icon, ListItem } from 'react-native-elements';

export const Settings = () => (
  <View>
    <ListItem bottomDivider>
      <Icon name={'cog'} />
      <ListItem.Content>
        <ListItem.Title>Settings</ListItem.Title>
      </ListItem.Content>
    </ListItem>
  </View>
);

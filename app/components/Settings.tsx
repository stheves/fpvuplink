import React, { useState } from 'react';
import { Button, Text, View, TextInput } from 'react-native';
import { Props } from '../types/types';
import { styles } from '../styles';

export function useInput(initial?: string) {
  const [value, setValue] = useState<string>();
  const onChangeText = (text: string) => {
    setValue(text);
  };

  return { value, onChangeText };
}

export const Settings = ({ navigation, route }: Props) => {
  const clientIdInput = useInput();
  const clientSecretInput = useInput();
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Settings</Text>
      <TextInput
        {...clientIdInput}
        style={{ backgroundColor: '#cccddd', margin: 15, width: 175 }}
        placeholder={'Client ID'}
        autoCorrect={false}
      />
      <TextInput
        {...clientSecretInput}
        style={{ backgroundColor: '#cccddd', margin: 15, width: 175 }}
        placeholder={'Client Secret'}
        autoCorrect={false}
        autoCompleteType={'password'}
        secureTextEntry={true}
      />
      <Button
        title="Save"
        onPress={() => {
          navigation.pop();
        }}
      />
    </View>
  );
};

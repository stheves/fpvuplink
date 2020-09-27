import { StackScreenProps } from '@react-navigation/stack';

export type RootStackParamList = {
  Home: undefined;
  Settings: undefined;
};

export type Props = StackScreenProps<RootStackParamList, 'Home'>;

export type UdpAddress = { host?: string; port: number };

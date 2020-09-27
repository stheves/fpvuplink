import React from 'react';
import { AppInstance } from './components/AppInstance';
import { createInstance } from './createInstance';

const instance = createInstance();

export default function App() {
  return <AppInstance instance={instance}></AppInstance>;
}

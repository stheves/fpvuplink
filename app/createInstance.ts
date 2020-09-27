import { AppContext, createContext, createListener } from './appContext';
import { createDefaultState } from './createDefaultState';

export interface AppOptions {
  udpPort: number;
}

export interface AppInstanceType {
  context: AppContext;
  options: AppOptions;
  decode(msg: Buffer): string;
}

export function createInstance(
  options: AppOptions = { udpPort: 8888 }
): AppInstanceType {
  const { decode } = new TextDecoder('utf-8');

  const state = createDefaultState();
  const listener = createListener();
  const context = createContext(state, listener);

  const instance = { context, options, decode };
  return instance as AppInstanceType;
}

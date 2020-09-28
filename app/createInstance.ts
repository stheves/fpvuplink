import { TextDecoder } from 'text-encoding';
import { AppContext, createContext, createListener } from './appContext';
import { defaultOptions } from './createDefaultAppOptions';
import { createDefaultState } from './createDefaultState';

enum COLOR_SCHEMES {
  DARK = 'dark',
}
export interface ThemeOptions {
  colorScheme?: COLOR_SCHEMES;
}
export interface AppOptions {
  udpPort: number;
  theme?: ThemeOptions;
}

export interface AppInstanceType {
  context: AppContext;
  options: AppOptions;
  decode(msg: Buffer): string;
}

export function createInstance(
  options: AppOptions = defaultOptions
): AppInstanceType {
  const { decode } = new TextDecoder('utf-8');

  const state = createDefaultState();
  const listener = createListener();
  const context = createContext(state, listener);

  const instance = { context, options, decode };
  return instance as AppInstanceType;
}

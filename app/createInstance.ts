import {
  createCoreActions,
  createDefaultState,
  createListener,
  GlobalContext,
} from './appContext';

export interface MavLinkOptions {
  udpPort: number;
}

export interface AppOptions {
  mavlink: MavLinkOptions;
}

export interface AppInstance {
  context: GlobalContext;
  options?: AppOptions;
  decode(msg: Buffer): string;
}

export function createInstance(): AppInstance {
  const { decode } = new TextDecoder('utf-8');

  const appOptions = { mavlink: { udpPort: 8888 } };

  const state = createDefaultState();
  const listener = createListener();
  const context = createCoreActions(state, listener);

  const instance = { context, options: appOptions, decode };
  return instance as AppInstance;
}

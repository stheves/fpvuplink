import { createContext } from 'react';
import * as actions from './actions';

interface Extendable {}

export interface GlobalState extends Extendable {
  connecting: boolean;
}

export interface EventEmitter {
  on(type: string, cb: (...args: any[]) => void): void;
  off(type: string, cb: (...args: any[]) => void): void;
  emit(type: string, msg: string): void;
}

export type GlobalContext = Partial<EventEmitter & GlobalState> | undefined;

export const createDefaultState = (): GlobalState => {
  return {
    connecting: false,
  } as GlobalState;
};

export const createListener = (): EventEmitter => {
  return {
    on: (type: string, callback: (...args: any[]) => void) => {},
    off: () => {},
    emit: () => {},
  } as EventEmitter;
};

export const createCoreActions = (
  state: GlobalState,
  events: EventEmitter
): GlobalContext => {
  return {
    state,
    ...events,
    ...actions,
  } as GlobalContext;
};

export const StateContext = createContext<GlobalContext>(undefined);

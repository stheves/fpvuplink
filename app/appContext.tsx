import * as actions from './actions';
import { GlobalState } from './createDefaultState';

export interface EventEmitter {
  on(type: string, cb: (...args: any[]) => void): void;
  off(type: string, cb: (...args: any[]) => void): void;
  emit(type: string, msg: string): void;
}

export type AppContext = Partial<EventEmitter & GlobalState> | undefined;

export const createListener = (): EventEmitter => {
  return {
    on: (type: string, callback: (...args: any[]) => void) => {},
    off: () => {},
    emit: () => {},
  } as EventEmitter;
};

export const createContext = (
  state: GlobalState,
  events: EventEmitter
): AppContext =>
  ({
    state,
    ...events,
    ...actions,
  } as AppContext);

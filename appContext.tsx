import { createContext } from 'react';

export type GlobalContext = { state: object } | undefined;

export const createDefaultContext = (): GlobalContext => {
  return {
    state: {},
  } as GlobalContext;
};

export const StateContext = createContext<GlobalContext>(undefined);

import { createContext } from 'react';
import { AppContext } from './appContext';

export const StateContext = createContext<AppContext>(undefined);

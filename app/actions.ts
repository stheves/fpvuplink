import { GlobalState } from './appContext';

export function connect(dispatch: any) {
  dispatch((state: GlobalState) => {
    return { ...state, connecting: true };
  });
}

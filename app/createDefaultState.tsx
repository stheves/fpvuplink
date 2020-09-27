interface Extendable {}

export interface GlobalState extends Extendable {
  connecting: boolean;
}

export const createDefaultState = (): GlobalState => {
  return {
    connecting: false,
  } as GlobalState;
};

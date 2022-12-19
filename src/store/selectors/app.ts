import { IStore } from "../store.types";

export const selectAppIsLoading = (state: IStore): boolean =>
  state.app.isLoading;

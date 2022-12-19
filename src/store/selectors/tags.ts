import { IStore } from "../store.types";
import { TagMapType } from "../../types/tags.types";

export const selectAllTags = (state: IStore): TagMapType => state.tags.tags;

export const selectVisibleTags = (state: IStore): TagMapType =>
  state.tags.visibleTags;

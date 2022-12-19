import { TagMapType } from "../../types/tags.types";
export const FILTER_TAGS = "FILTER_TAGS";

export function filterTags(tag: string, items: TagMapType) {
  return {
    type: FILTER_TAGS,
    tag,
    items,
  };
}

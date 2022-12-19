export const SET_IS_LOADING = "SET_IS_LOADING";

export function setIsLoading(status: boolean) {
  return {
    type: SET_IS_LOADING,
    status,
  };
}

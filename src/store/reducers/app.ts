import { SET_IS_LOADING } from "../actions/app";
import { StoreAppType } from "../store.types";
import { combineReducers } from "redux";

const initialState: StoreAppType = {
  isLoading: true,
};

interface ActionType {
  type?: string;
  status?: string;
}

function isLoading(state = initialState.isLoading, action: ActionType) {
  const { status } = action;
  switch (action.type) {
    case SET_IS_LOADING:
      return status;
    default:
      return state;
  }
}

export default combineReducers({
  isLoading,
});

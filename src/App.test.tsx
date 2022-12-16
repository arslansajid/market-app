import React from "react";
import { render } from "@testing-library/react";

import App from "./App";

import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import { storeInitialState } from "./static/store";

describe("With React Testing Library", () => {
  const mockStore = configureStore();
  let store;

  it('Shows "Application!"', () => {
    store = mockStore(storeInitialState);
    const { getByAltText, getByText } = render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    expect(getByAltText("logo")).not.toBeNull();
    expect(getByText("Products")).not.toBeNull();
  });
});

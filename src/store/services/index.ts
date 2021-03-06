/**
 * Mocking client-server processing
 */

import { brands } from "../../static/brands";
import { items } from "../../static/items";

const TIMEOUT = 2000; // 2 second wait for test purposes

export const api = {
  getProducts() {
    return new Promise((resolve) => {
      setTimeout(() => resolve(items), TIMEOUT);
    });
  },

  getBrands() {
    return new Promise((resolve) => {
      setTimeout(() => resolve(brands), TIMEOUT);
    });
  },
};

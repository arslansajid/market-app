/**
 * Mocking client-server processing
 */

import { FilterTypes } from "../../types/filters.types";
import axios from "axios";

const API_URL = "http://localhost:8000";

export type TParamType = {
  type?: FilterTypes;
  brand?: string;
  sortBy?: string;
  sortOrder?: string;
  tags?: string[],
  searchTerm?: string
};

export const api = {
  async getProducts(params?: TParamType) {
    const products = await axios
      .get(`${API_URL}/items`, {
        params: {
          itemType: params?.type,
          manufacturer: params?.brand,
          tags: params?.tags,
          _sort: params?.sortBy,
          _order: params?.sortOrder,
        },
      })
      .then((res) => res.data);
    return products;
  },

  async getBrands(params?: TParamType) {
    const brands = await axios
      .get(`${API_URL}/companies`, {
        params: {
          name_like: params?.searchTerm,
        },
      })
      .then((res) => res.data);
    return brands;
  },
};

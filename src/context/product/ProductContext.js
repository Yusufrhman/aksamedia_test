import { createContext } from "react";

export const ProductContext = createContext({
  products: [],
  addNewProduct: async (product) => {},
  updateExistingProduct: async (product) => {},
  deleteProductById: async (id) => {},
  getProductDetails: async (id) => {},
});

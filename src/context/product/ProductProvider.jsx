import React, { useState, useEffect } from "react";
import {
  initDB,
  addProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProduct,
} from "../../util/indexedDB";

import { ProductContext } from "./ProductContext";

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  // Inisialisasi data produk
  useEffect(() => {
    const fetchProducts = async () => {
      const dbProducts = await getAllProducts();
      setProducts(dbProducts);
    };

    fetchProducts();
  }, []);

  const addNewProduct = async (product) => {
    const newProductId = await addProduct(product);
    const newProduct = { ...product, id: newProductId };
    setProducts((prevProducts) => [...prevProducts, newProduct]);
  };

  const updateExistingProduct = async (product) => {
    await updateProduct(product);
    setProducts((prevProducts) =>
      prevProducts.map((p) => (p.id === product.id ? product : p))
    );
  };

  const deleteProductById = async (id) => {
    await deleteProduct(id);
    setProducts((prevProducts) => prevProducts.filter((p) => p.id !== id));
  };

  const getProductDetails = async (id) => {
    return await getProductById(id);
  };

  return (
    <ProductContext.Provider
      value={{
        products,
        addNewProduct,
        updateExistingProduct,
        deleteProductById,
        getProductDetails,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

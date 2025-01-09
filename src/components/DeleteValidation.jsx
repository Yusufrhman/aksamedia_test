import { useContext } from "react";
import { ProductContext } from "../context/product/ProductContext";

export default function DeleteValidation({ product, onClose }) {
  const { deleteProductById } = useContext(ProductContext);
  async function deleteProduct() {
    await deleteProductById(product.id);
    onClose();
  }

  return (
    <div className="text-center w-full flex flex-col justify-between h-[8rem]">
      <div className="mb-4">
        <h2 className="text-lg md:text-xl lg:text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-1">
          Are you sure?
        </h2>
        <p className="text-gray-500 dark:text-gray-400 text-xs sm:text-sm">
          Deleting this product ({product.name})?
        </p>
      </div>

      <div className="flex justify-center gap-4 text-sm md:text-base">
        <button
          type="button"
          className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition-all dark:bg-red-700 dark:hover:bg-red-800"
          onClick={() => {
            deleteProduct();
          }}
        >
          Yes, Delete
        </button>
        <button
          type="button"
          className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-400 transition-all dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600"
          onClick={() => onClose()}
        >
          Cancel
        </button>
      </div>
    </div>
  );
}

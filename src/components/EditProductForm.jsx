import { useContext, useState } from "react";
import InputField from "./InputField";
import MainButton from "./MainButton";
import { Category } from "../util/indexedDB";
import { ProductContext } from "../context/product/ProductContext";

export default function EditProductForm({ product, onSave }) {
  // State to manage form values
  const [formData, setFormData] = useState({
    name: product.name,
    price: product.price,
    category: product.category,
  });

  const [error, setError] = useState({
    name: "",
    price: "",
    category: "",
  });
  // call product context
  const { updateExistingProduct } = useContext(ProductContext);

  // Handle form submission
  async function handleSubmit(e) {
    e.preventDefault();
    setError({
      name: "",
      price: "",
      category: "",
    });
    let errors = {};
    if (!formData.name) errors.name = "Product name is required";
    if (!formData.price) errors.price = "Price is required";
    if (!formData.category) errors.category = "Category is required";

    if (Object.keys(errors).length > 0) {
      setError(errors);
      return;
    }
    await updateExistingProduct({
      ...formData,
      id: product.id,
      price: parseInt(formData.price),
    });
    onSave();
  }

  // Handle input changes
  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-2 sm:space-y-4 md:space-y-6 w-full"
    >
      <h2 className="text-lg md:text-xl lg:text-2xlfont-semibold text-gray-800 dark:text-gray-100">
        Update Product
      </h2>
      <InputField
        id="name"
        label="Product name"
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        className="w-full bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 focus:ring-teal-500 focus:border-teal-500"
        error={error.name}
      />
      <InputField
        id="price"
        label="Price"
        type="number"
        name="price"
        value={formData.price}
        onChange={handleChange}
        className="w-full bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 focus:ring-teal-500 focus:border-teal-500"
        error={error.price}
      />
      <div>
        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
          className="p-2 border rounded-lg text-xs sm:text-sm md:text-base h-10 w-full bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 focus:ring-teal-500 focus:border-teal-500"
        >
          <option value="">Semua Kategori</option>
          {Object.values(Category).map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
        {error.category && (
          <p className="text-red-600 text-xs pl-1 mt-1">{error.category}</p>
        )}
      </div>
      <MainButton
        type="submit"
        className="w-full bg-teal-500 hover:bg-teal-600 text-white font-medium py-2 rounded-lg transition-all dark:bg-teal-600 dark:hover:bg-teal-700"
      >
        Save
      </MainButton>
    </form>
  );
}

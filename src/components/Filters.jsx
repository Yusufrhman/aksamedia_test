import { Category } from "../util/indexedDB";
import InputField from "./InputField";

const Filters = ({
  searchQuery,
  categoryQuery,
  sortQuery,
  onSearchChange,
  onCategoryChange,
  onSortChange,
}) => (
  <div className="flex flex-col items-start lg:flex-row lg:items-center justify-start gap-4">
    <InputField
      type="text"
      placeholder="Cari produk..."
      value={searchQuery}
      onChange={onSearchChange}
      className="p-2 border rounded-lg h-10 mt-0 max-w-[20rem] bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 focus:ring-teal-500 focus:border-teal-500"
    />
    <div className="flex gap-2">
      <select
        value={categoryQuery}
        onChange={onCategoryChange}
        className="p-2 border rounded-lg text-xs sm:text-sm md:text-base h-10 max-w-[20rem] bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 focus:ring-teal-500 focus:border-teal-500"
      >
        <option value="">Semua Kategori</option>
        {Object.values(Category).map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
      <select
        value={sortQuery}
        onChange={onSortChange}
        className="p-2 border rounded-lg text-xs sm:text-sm md:text-base h-10 max-w-[20rem] bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 focus:ring-teal-500 focus:border-teal-500"
      >
        <option value="">Urutkan Harga</option>
        <option value="asc">Harga Terendah</option>
        <option value="desc">Harga Tertinggi</option>
      </select>
    </div>
  </div>
);

export default Filters;

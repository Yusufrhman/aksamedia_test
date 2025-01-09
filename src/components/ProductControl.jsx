export default function ProductControl({
  categories,
  categoryFilter,
  sortOrder,
  onSort,
  onFilter,
}) {
  return (
    <div className="flex justify-between items-center mb-4">
      <div>
        <label className="mr-2 font-medium text-gray-700 dark:text-gray-300">
          Filter Kategori:
        </label>
        <select
          className="border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-3 py-2 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500 transition duration-300"
          value={categoryFilter}
          onChange={(e) => onFilter(e.target.value)}
        >
          <option value="">Semua</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
      <div className="flex items-center space-x-2">
        <label className="mr-2 font-medium text-gray-700 dark:text-gray-300">
          Sort Harga:
        </label>
        <button
          className={`border border-gray-300 dark:border-gray-600 px-3 py-2 rounded-l-md shadow-sm text-gray-700 dark:text-gray-300 ${
            sortOrder === "asc"
              ? "bg-teal-500 text-white"
              : "hover:bg-gray-100 dark:hover:bg-gray-700"
          } transition duration-300`}
          onClick={() => onSort("asc")}
        >
          Asc
        </button>
        <button
          className={`border border-gray-300 dark:border-gray-600 px-3 py-2 rounded-r-md shadow-sm text-gray-700 dark:text-gray-300 ${
            sortOrder === "desc"
              ? "bg-teal-500 text-white"
              : "hover:bg-gray-100 dark:hover:bg-gray-700"
          } transition duration-300`}
          onClick={() => onSort("desc")}
        >
          Desc
        </button>
      </div>
    </div>
  );
}

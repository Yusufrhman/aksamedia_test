export default function ProductTableHead() {
  return (
    <thead>
      <tr className="bg-teal-600 text-white dark:bg-teal-800 dark:text-gray-200">
        <th className="px-4 py-3 text-left w-1/12">No.</th>
        <th className="px-4 py-3 text-left w-4/12">Nama Produk</th>
        <th className="px-4 py-3 text-left w-4/12">Harga (Rp)</th>
        <th className="px-4 py-3 text-left w-2/12">Kategori</th>
        <th className="px-4 py-3 text-left w-2/12">Action</th>
      </tr>
    </thead>
  );
}

import ProductTableHead from "./ProductTableHead";
import ProductTableRow from "./ProductTableRow";

export default function ProductTable({ products, currentPage }) {
  return (
    <div className="overflow-scroll">
      <table className="table-auto w-full text-xs sm:text-sm md:text-base mx-auto border border-gray-300 rounded-lg shadow-lg dark:border-gray-700 dark:bg-gray-800">
        <ProductTableHead />
        <tbody>
          {products.map((product, index) => (
            <ProductTableRow
              key={product.id}
              product={product}
              index={index}
              currentPage={currentPage}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

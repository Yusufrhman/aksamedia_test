import { useSearchParams } from "react-router";
import { useContext, useEffect } from "react";

import Filters from "../components/Filters";
import ProductTable from "../components/product-table/ProductTable";
import Pagination from "../components/Pagination";
import { ProductContext } from "../context/product/ProductContext";
import { updateQueryParams } from "../util/queryParams";
import { filterAndSortProducts } from "../util/filter-product";
import AddProductAction from "../components/AddProductAction";

export default function DashboardPage() {
  const [searchParams, setSearchParams] = useSearchParams();

  // Query parameter states
  const searchQuery = searchParams.get("search") || "";
  const categoryQuery = searchParams.get("category") || "";
  const sortQuery = searchParams.get("sort") || "";
  const pageQuery = parseInt(searchParams.get("page"), 10) || 1;

  const productsPerPage = 10;
  const { products } = useContext(ProductContext);

  useEffect(() => {
    if (pageQuery <= 0) {
      updateQueryParams(setSearchParams, "page", 1);
    }
  }, [pageQuery, setSearchParams]);

  // logika filter
  const filteredProducts = filterAndSortProducts(
    products,
    searchQuery,
    categoryQuery,
    sortQuery
  );

  //pagination logic
  const startIndex = (pageQuery - 1) * productsPerPage;
  const paginatedProducts = filteredProducts.slice(
    startIndex,
    startIndex + productsPerPage
  );
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  return (
    <main className="">
      <div className="h-full my-5 py-1 max-w-[90%] mx-auto">
        <div className="flex items-end justify-between mb-4 gap-2">
          <Filters
            searchQuery={searchQuery}
            categoryQuery={categoryQuery}
            sortQuery={sortQuery}
            onSearchChange={(e) =>
              updateQueryParams(setSearchParams, "search", e.target.value)
            }
            onCategoryChange={(e) =>
              updateQueryParams(setSearchParams, "category", e.target.value)
            }
            onSortChange={(e) =>
              updateQueryParams(setSearchParams, "sort", e.target.value)
            }
          />
          <AddProductAction></AddProductAction>
        </div>
        <ProductTable products={paginatedProducts} currentPage={pageQuery} />
        <Pagination
          currentPage={pageQuery}
          totalPages={totalPages}
          onPageChange={(newPage) =>
            updateQueryParams(setSearchParams, "page", newPage)
          }
        />
      </div>
    </main>
  );
}

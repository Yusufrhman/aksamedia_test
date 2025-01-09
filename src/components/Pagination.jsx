import { IoIosArrowBack } from "react-icons/io";

export default function Pagination({ currentPage, totalPages, onPageChange }) {
  totalPages = 100;
  let pages = [];
  if (totalPages > 6) {
    if (currentPage < 4) {
      pages = [1, 2, 3, 4, "...", totalPages];
    } else if (totalPages - currentPage < 4) {
      pages = [
        1,
        "...",
        totalPages - 3,
        totalPages - 2,
        totalPages - 1,
        totalPages,
      ];
    } else {
      pages = [
        1,
        "...",
        currentPage - 1,
        currentPage,
        currentPage + 1,
        "...",
        totalPages,
      ];
    }
  } else {
    pages = Array.from({ length: totalPages }, (_, i) => i + 1);
  }

  return (
    <div className="flex justify-center mt-5 space-x-2">
      <button
        key="prev"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={`px-3 py-2 md:px-4 md:py-2 text-xs sm:text-sm md:text-base rounded-lg shadow-sm font-medium transition-all duration-300 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-teal-100 dark:hover:bg-teal-600 disabled:opacity-50 disabled:hover:dark:bg-gray-700 disabled:hover:bg-gray-200`}
      >
        <IoIosArrowBack className=" text-gray-700 dark:text-gray-300" />
      </button>
      {pages.map((page, index) => (
        <button
          key={page}
          onClick={() => page !== "..." && onPageChange(page)}
          disabled={page === "..." || page === currentPage}
          className={`px-3 py-2 md:px-4 md:py-2 text-xs sm:text-sm md:text-base rounded-lg shadow-sm font-medium transition-all duration-300 ${
            page === currentPage
              ? "bg-teal-500 text-white"
              : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-teal-100 dark:hover:bg-teal-600"
          }`}
        >
          {page}
        </button>
      ))}
      <button
        key="next"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`px-3 py-2 md:px-4 md:py-2 text-xs sm:text-sm md:text-base rounded-lg shadow-sm font-medium transition-all duration-300 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-teal-100 dark:hover:bg-teal-600 disabled:opacity-50 disabled:hover:dark:bg-gray-700 disabled:hover:bg-gray-200`}
      >
        <IoIosArrowBack className="rotate-180 text-gray-700 dark:text-gray-300" />
      </button>
    </div>
  );
}

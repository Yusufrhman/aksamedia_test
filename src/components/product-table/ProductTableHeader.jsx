import Filters from "./Filters";

export default function ProductTableHeader({}) {
  return (
    <div className="flex items-center justify-between mb-4">
      <Filters
        searchQuery={searchQuery}
        categoryQuery={categoryQuery}
        sortQuery={sortQuery}
        onSearchChange={onSearchChange}
        onCategoryChange={onCategoryChange}
        onSortChange={onSortChange}
      />
      <MainButton type="button" onClick={onClick} className="w-fit h-full px-2">
        <MdAdd className="text-white" size={24} />
      </MainButton>
    </div>
  );
}

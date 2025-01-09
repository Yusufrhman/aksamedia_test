export const filterAndSortProducts = (
  products,
  searchQuery,
  categoryQuery,
  sortQuery
) => {
  return products
    .filter((product) => {
      const matchesSearch = product.name
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
      const matchesCategory = categoryQuery
        ? product.category.toLowerCase() === categoryQuery.toLowerCase()
        : true;
      return matchesSearch && matchesCategory;
    })
    .sort((a, b) => {
      if (sortQuery === "asc") return a.price - b.price;
      if (sortQuery === "desc") return b.price - a.price;
      return 0; 
    });
};

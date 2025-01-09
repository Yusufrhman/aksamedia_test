export const updateQueryParams = (setSearchParams, key, value) => {
  setSearchParams((prev) => {
    const newParams = new URLSearchParams(prev);
    if (value) {
      newParams.set(key, value);
    } else {
      newParams.delete(key);
    }
    return newParams;
  });
};

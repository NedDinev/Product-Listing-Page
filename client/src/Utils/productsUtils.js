export const findHighestProductPrice = (category) => {
  const prices = category.map((product) => product.price);

  return Math.max(...prices);
};

export const findLowestProductPrice = (category) => {
  const prices = category.map((product) => product.price);

  return Math.min(...prices);
};

export function sortProducts(products, sortingOption) {
  switch (sortingOption) {
    case "Alphabetical a-z":
      return [...products].sort((a, b) => a.name.localeCompare(b.name));
    case "Alphabetical z-a":
      return [...products].sort((a, b) => b.name.localeCompare(a.name));
    case "Price ascending":
      return [...products].sort((a, b) => a.price - b.price);
    case "Price descending":
      return [...products].sort((a, b) => b.price - a.price);
    default:
      // If the sorting option is "Default", return the products as they are (unsorted)
      return products;
  }
}

export function filterProducts(products, materialFilters, maxPrice) {
  return products.filter((product) => {
    const isMaterialMatch =
      materialFilters[product.material] || // If any material checkbox is selected
      Object.values(materialFilters).every((value) => !value); // If no material checkbox is selected

    const isPriceInRange = product.price <= maxPrice;

    return isMaterialMatch && isPriceInRange;
  });
}
export const findHighestProductPrice = (category) => {
  const prices = category.map((product) => product.price);

  return Math.max(...prices);
};

export const findLowestProductPrice = (category) => {
  const prices = category.map((product) => product.price);

  return Math.min(...prices);
};

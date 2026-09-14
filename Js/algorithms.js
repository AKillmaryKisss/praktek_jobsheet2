export function findProductById(products, id) {
  return products.find(p => p.id === id);
}

export function linearSearch(array, target) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === target) return i;
  }
  return -1;
}

export function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) return mid;
    if (arr[mid] < target) left = mid + 1;
    else right = mid - 1;
  }
  return -1;
}

export function sortProducts(products, sortBy) {
  const arr = [...products];
  switch (sortBy) {
    case "price-asc": return arr.sort((a, b) => a.price - b.price);
    case "price-desc": return arr.sort((a, b) => b.price - a.price);
    case "rating": return arr.sort((a, b) => b.rating - a.rating);
    case "title": return arr.sort((a, b) => a.title.localeCompare(b.title));
    default: return arr;
  }
}

export function groupByCategory(products) {
  return products.reduce((groups, product) => {
    const key = product.category;
    if (!groups[key]) groups[key] = [];
    groups[key].push(product);
    return groups;
  }, {});
}

export function getStatistics(products) {
  const prices = products.map(p => p.price);
  const ratings = products.map(p => p.rating);
  return {
    totalProducts: products.length,
    averagePrice: prices.reduce((a, b) => a + b, 0) / prices.length,
    highestPrice: Math.max(...prices),
    lowestPrice: Math.min(...prices),
    totalStock: products.reduce((sum, p) => sum + p.stock, 0),
    averageRating: ratings.reduce((a, b) => a + b, 0) / ratings.length
  };
}
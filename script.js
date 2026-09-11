// BAGIAN 1 — JavaScript Fundamentals dari Sudut Pandang Problem Solving

// Latihan 1.1
function calculateDiscountedPrice(price, discountPercent) {
  return price - (price * discountPercent) / 100;
}
console.log(calculateDiscountedPrice(1000, 10));
// Latihan 1.2
const cart = [
  { title: "Laptop", price: 1000, discountPercent: 10 },
  { title: "Mouse", price: 20, discountPercent: 5 },
  { title: "Keyboard", price: 50, discountPercent: 0 }
];
function applyDiscounts(cart) {
  const result = [];
  for (const item of cart) {
    const finalPrice = calculateDiscountedPrice(item.price, item.discountPercent);
    result.push({ ...item, finalPrice });
  }
  return result;
}
console.log(applyDiscounts(cart));

// BAGIAN 2 — Data Representation dan Array of Objects

const products = [
  { id: 1, title: "Laptop", price: 1200, category: "laptops", stock: 5 },
  { id: 2, title: "Smartphone", price: 800, category: "phones", stock: 15 },
  { id: 3, title: "Headphones", price: 100, category: "audio", stock: 3 }
];
// Latihan 2.1
function findProductById(products, id) {
  return products.find(p => p.id === id);
}
console.log(findProductById(products, 2));
console.log(findProductById(products, 99));
// Latihan 2.2
function lowStockProducts(products) {
  return products.filter(p => p.stock < 10);
}
console.log(lowStockProducts(products));
// Latihan 2.3
function updateStock(products, id, newStock) {
  return products.map(p => (p.id === id ? { ...p, stock: newStock } : p));
}
console.log(updateStock(products, 1, 20));
console.log(products);

// BAGIAN 3 — Nested Data

const productsNested = [
  {
    id: 1, title: "Laptop", price: 1200, rating: 4.5, stock: 10, category: "laptops",
    tags: ["computer", "electronics", "office"],
    dimensions: { width: 30, height: 2, depth: 20 },
    reviews: [
      { user: "A", rating: 5, comment: "Good product" },
      { user: "B", rating: 4, comment: "Worth it" }
    ]
  },
  {
    id: 2, title: "Smartphone", price: 800, rating: 4.2, stock: 15, category: "phones",
    tags: ["mobile", "electronics"],
    dimensions: { width: 7, height: 0.8, depth: 15 },
    reviews: [
      { user: "C", rating: 4, comment: "Nice camera" },
      { user: "D", rating: 5, comment: "Fast" },
      { user: "E", rating: 3, comment: "Battery so-so" }
    ]
  }
];
// Latihan 3.1
console.log(productsNested.map(p => p.tags));
// Latihan 3.2
function findProductsByTag(products, tag) {
  return products.filter(p => p.tags.includes(tag));
}
console.log(findProductsByTag(productsNested, "electronics"));
// Latihan 3.3
function reviewCounts(products) {
  return products.map(p => ({ id: p.id, title: p.title, totalReviews: p.reviews.length }));
}
console.log(reviewCounts(productsNested));
// Latihan 3.4
function fiveStarReviews(products) {
  const result = [];
  for (const p of products) {
    for (const r of p.reviews) {
      if (r.rating === 5) result.push(r);
    }
  }
  return result;
}
console.log(fiveStarReviews(productsNested));
// Latihan 3.5
function calculateAverageRating(product) {
  const total = product.reviews.reduce((sum, r) => sum + r.rating, 0);
  return total / product.reviews.length;
}
console.log(calculateAverageRating(productsNested[0]));
console.log(calculateAverageRating(productsNested[1]));
// Latihan 3.6
function mostReviewedProduct(products) {
  return products.reduce((max, p) => (p.reviews.length > max.reviews.length ? p : max));
}
console.log(mostReviewedProduct(productsNested).title);
// Latihan 3.7
function allReviewRatings(products) {
  const result = [];
  for (const p of products) {
    for (const r of p.reviews) result.push(r.rating);
  }
  return result;
}
console.log(allReviewRatings(productsNested));

// BAGIAN 4 — Flattening Data

const tags = [
  ["computer", "office"],
  ["electronics"],
  ["gaming", "computer"]
];

console.log(tags.flat());
// Latihan 4.1
const allTagsFlat = productsNested.flatMap(p => p.tags);
console.log(allTagsFlat);
// Latihan 4.2
const allComments = productsNested.flatMap(p => p.reviews.map(r => r.comment));
console.log(allComments);

// BAGIAN 5 —  Map, Filter, Reduce dalam Konteks Nyata

const titles = products.map(p => p.title);
const expensiveProducts = products.filter(p => p.price > 500);
const totalStock = products.reduce((sum, p) => sum + p.stock, 0);
// Latihan 5.1
function averagePriceByCategory(products, category) {
  const prices = products
    .filter(p => p.category === category)
    .map(p => p.price);
  return prices.reduce((a, b) => a + b, 0) / prices.length;
}
console.log(averagePriceByCategory(products, "laptops"));
// Latihan 5.2
function getStatistics(products) {
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
console.log(getStatistics(products));

// BAGIAN 6 — Searching (Linear Search)

function linearSearch(array, target) {
for (let i = 0; i < array.length; i++) {
if (array[i] === target) return i;
}
return -1;
}
// Latihan 6.1
function linearSearch(array, target) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === target) return i;
  }
  return -1;
}
console.log(linearSearch([10, 20, 30, 40], 30));
console.log(linearSearch([10, 20, 30, 40], 99));
// Latihan 6.2
function linearSearchProductById(products, id) {
  for (let i = 0; i < products.length; i++) {
    if (products[i].id === id) return products[i];
  }
  return -1;
}
console.log(linearSearchProductById(products, 2));
console.log(linearSearchProductById(products, 99));

// BAGIAN 7 — Binary Search

function binarySearch(arr, target) {
let left = 0;
let right = arr.length - 1;
while (left <= right) {
const mid = Math.floor((left + right) / 2);
// bandingkan arr[mid] dengan target
// jika sama, return mid
// jika arr[mid] lebih kecil dari target, geser left
// jika arr[mid] lebih besar dari target, geser right
}
return -1;
}
// Latihan 7.1
function binarySearch(arr, target) {
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
console.log(binarySearch([10, 20, 30, 40, 50], 40));
console.log(binarySearch([10, 20, 30, 40, 50], 99));
// Latihan 7.2
function binarySearchByPrice(sortedProducts, targetPrice) {
  let left = 0;
  let right = sortedProducts.length - 1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (sortedProducts[mid].price === targetPrice) return sortedProducts[mid];
    if (sortedProducts[mid].price < targetPrice) left = mid + 1;
    else right = mid - 1;
  }
  return -1;
}

const sortedByPrice = [...products].sort((a, b) => a.price - b.price);
console.log(sortedByPrice);
console.log(binarySearchByPrice(sortedByPrice, 800));

// BAGIAN 8 — Sorting

/*const numbers = [5, 3, 8, 1];
numbers.sort((a, b) => a - b); // ascending
numbers.sort((a, b) => b - a); // descending
products.sort((a, b) => a.price - b.price); // custom comparator*/
// Latihan 8.1
function bubbleSort(numbers) {
  const arr = [...numbers];
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}

const numbers = [5, 3, 8, 1];
console.log(bubbleSort(numbers));
console.log(numbers);
// Latihan 8.2
function sortProducts(products, sortBy) {
  const arr = [...products];
  switch (sortBy) {
    case "price-asc":
      return arr.sort((a, b) => a.price - b.price);
    case "price-desc":
      return arr.sort((a, b) => b.price - a.price);
    case "rating":
      return arr.sort((a, b) => b.rating - a.rating);
    case "title":
      return arr.sort((a, b) => a.title.localeCompare(b.title));
    default:
      return arr;
  }
}

console.log(sortProducts(products, "price-asc"));
console.log(sortProducts(products, "title"));
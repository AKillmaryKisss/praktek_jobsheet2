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

// Catatan: dataset ini sudah ditambah "rating" & "tags"
// karena dipakai lagi di Bagian 5 (rating) dan Bagian 10-11 (tags)
const products = [
  { id: 1, title: "Laptop", price: 1200, category: "laptops", stock: 5, rating: 4.5, tags: ["computer", "office"] },
  { id: 2, title: "Smartphone", price: 800, category: "phones", stock: 15, rating: 4.2, tags: ["mobile", "electronics"] },
  { id: 3, title: "Headphones", price: 100, category: "audio", stock: 3, rating: 4.0, tags: ["electronics", "music"] }
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

// BAGIAN 5 — Map, Filter, Reduce dalam Konteks Nyata

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

// BAGIAN 9 — Grouping dan Aggregation

// Latihan 9.1
function groupByCategory(products) {
  return products.reduce((groups, product) => {
    const key = product.category;
    if (!groups[key]) groups[key] = [];
    groups[key].push(product);
    return groups;
  }, {});
}
console.log(groupByCategory(products));

// Latihan 9.2
function categorySummary(products) {
  const grouped = groupByCategory(products);
  return Object.entries(grouped).map(([category, items]) => ({
    category,
    totalProducts: items.length
  }));
}
console.log(categorySummary(products));
console.table(categorySummary(products));

// BAGIAN 10 — Frequency Counting

// Latihan 10.1
function countFrequency(array) {
  return array.reduce((counts, item) => {
    counts[item] = (counts[item] || 0) + 1;
    return counts;
  }, {});
}

const words = ["laptop", "phone", "laptop", "tablet", "phone", "laptop"];
console.log(countFrequency(words));

// Latihan 10.2
const categoryFrequency = countFrequency(products.map(p => p.category));
const tagsFrequency = countFrequency(products.flatMap(p => p.tags));
const ratingFrequency = countFrequency(products.map(p => Math.round(p.rating)));

console.log(categoryFrequency);
console.log(tagsFrequency);
console.log(ratingFrequency);

// BAGIAN 11 — Set

// Latihan 11.1
const uniqueCategories = [...new Set(products.map(p => p.category))];
const uniqueTags = [...new Set(products.flatMap(p => p.tags))];

console.log(uniqueCategories);
console.log(uniqueTags);

// BAGIAN 12 — Map (Struktur Data)

// Latihan 12.1
function buildProductLookup(products) {
  const map = new Map();
  for (const product of products) {
    map.set(product.id, product);
  }
  return map;
}

const productLookup = buildProductLookup(products);
console.log(productLookup);
console.log(productLookup.get(2));
console.log(productLookup.get(99));

// BAGIAN 13 — Stack (LIFO)

// Latihan 13.1
class Stack {
  constructor() {
    this.items = [];
  }
  push(item) {
    this.items.push(item);
  }
  pop() {
    return this.items.pop();
  }
  peek() {
    return this.items[this.items.length - 1];
  }
  isEmpty() {
    return this.items.length === 0;
  }
}

const stack = new Stack();
stack.push("laptop");
stack.push("phone");
stack.push("tablet");
console.log(stack.peek());
console.log(stack.pop());
console.log(stack.items);
console.log(stack.isEmpty());

// Latihan 13.2
const searchHistory = new Stack();

function search(keyword) {
  searchHistory.push(keyword);
  console.log(`Mencari: ${keyword}`);
}

function undoSearch() {
  if (searchHistory.isEmpty()) {
    console.log("Tidak ada riwayat pencarian");
    return undefined;
  }
  searchHistory.pop();
  const previous = searchHistory.peek();
  console.log(`Undo. Kembali ke: ${previous ?? "(kosong)"}`);
  return previous;
}

search("laptop");
search("phone");
search("tablet");
undoSearch();
undoSearch();

// BAGIAN 14 — Queue (FIFO)

// Latihan 14.1
class Queue {
  constructor() {
    this.items = [];
  }
  enqueue(item) {
    this.items.push(item);
  }
  dequeue() {
    return this.items.shift();
  }
  peek() {
    return this.items[0];
  }
  isEmpty() {
    return this.items.length === 0;
  }
}

const requestQueue = new Queue();
requestQueue.enqueue("request A");
requestQueue.enqueue("request B");
requestQueue.enqueue("request C");
console.log(requestQueue.peek());     // lihat paling depan
console.log(requestQueue.dequeue());  // proses & keluarkan paling depan
console.log(requestQueue.items);      // sisa antrean

// Bagian 15 — Recursion

// Latihan 15.1
const categories = [
  {
    name: "Electronics",
    children: [
      { name: "Laptop", children: [] },
      { name: "Phone", children: [] }
    ]
  },
  {
    name: "Fashion",
    children: [
      {
        name: "Men",
        children: [
          { name: "Shirt", children: [] }
        ]
      }
    ]
  }
];

function printCategories(categories, depth = 0) {
  for (const category of categories) {
    console.log("  ".repeat(depth) + category.name);
    if (category.children.length > 0) {
      printCategories(category.children, depth + 1);
    }
  }
}

printCategories(categories);

// Bagian 16 - Algorithm Complexity (Big-O secara Praktis)

// Latihan 16.1
function linearSearchCountSteps(array, target) {
  let steps = 0;
  for (let i = 0; i < array.length; i++) {
    steps++;
    if (array[i] === target) return { index: i, steps };
  }
  return { index: -1, steps };
}

function binarySearchCountSteps(arr, target) {
  let steps = 0;
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    steps++;
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) return { index: mid, steps };
    if (arr[mid] < target) left = mid + 1;
    else right = mid - 1;
  }
  return { index: -1, steps };
}

const bigArray = [];
for (let i = 1; i <= 10000; i++) bigArray.push(i);

console.log(linearSearchCountSteps(bigArray, 10000));
console.log(binarySearchCountSteps(bigArray, 10000));

// Bagian 17 - DOM Manipulation

function renderProducts(products) {
  const container = document.querySelector("#product-list");
  container.innerHTML = "";
  for (const product of products) {
    const card = document.createElement("div");
    card.classList.add("product-card");
    card.innerHTML = `
      <h3>${product.title}</h3>
      <p>${product.category}</p>
      <p>Harga: $${product.price}</p>
      <p>Rating: ${product.rating}</p>
      <p>Stock: ${product.stock}</p>
    `;
    container.append(card);
  }
}

renderProducts(products);

// Bagian 18 - State Management Sederhana (Tanpa Library)

const state = {
  products: products, // dataset dari Bagian 2
  search: "",
  category: "all",
  sortBy: "default",
  favorites: [],
  status: "idle"
};

function render() {
  let result = state.products;

  // filter berdasarkan search (pakai partialSearch, case-insensitive)
  if (state.search) {
    const keyword = state.search.toLowerCase();
    result = result.filter(p => p.title.toLowerCase().includes(keyword));
  }

  // filter berdasarkan category
  if (state.category !== "all") {
    result = result.filter(p => p.category === state.category);
  }

  // sort (pakai sortProducts dari Bagian 8.2)
  result = sortProducts(result, state.sortBy);

  renderProducts(result);
}

render(); // panggil pertama kali untuk render awal

// BAGIAN 19 - Event Handling

const searchInput = document.querySelector("#search-input");
searchInput.addEventListener("input", (e) => {
  state.search = e.target.value;
  render();
});

const categorySelect = document.querySelector("#category-select");
categorySelect.addEventListener("change", (e) => {
  state.category = e.target.value;
  render();
});

const sortSelect = document.querySelector("#sort-select");
sortSelect.addEventListener("change", (e) => {
  state.sortBy = e.target.value;
  render();
});

// BAGIAN 20 — Modern JavaScript (ES6+)

// Refactor getStatistics dengan destructuring
function getStatisticsV2(products) {
  const prices = products.map(({ price }) => price);
  const ratings = products.map(({ rating }) => rating);
  const stocks = products.map(({ stock }) => stock);

  const totalProducts = products.length;
  const averagePrice = prices.reduce((a, b) => a + b, 0) / prices.length;
  const highestPrice = Math.max(...prices);
  const lowestPrice = Math.min(...prices);
  const totalStock = stocks.reduce((a, b) => a + b, 0);
  const averageRating = ratings.reduce((a, b) => a + b, 0) / ratings.length;

  return { totalProducts, averagePrice, highestPrice, lowestPrice, totalStock, averageRating };
}
console.log(getStatisticsV2(products));

// Contoh optional chaining + nullish coalescing
function getProductWidth(product) {
  return product.dimensions?.width ?? "Tidak diketahui";
}
console.log(getProductWidth({ title: "Contoh A", dimensions: { width: 30 } }));
console.log(getProductWidth({ title: "Contoh B" })); // tidak ada dimensions
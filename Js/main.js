import { state } from "./state.js";
import { sortProducts } from "./algorithms.js";
import { renderProducts } from "./ui.js";

function render() {
  let result = state.products;

  if (state.search) {
    const keyword = state.search.toLowerCase();
    result = result.filter(p => p.title.toLowerCase().includes(keyword));
  }
  if (state.category !== "all") {
    result = result.filter(p => p.category === state.category);
  }
  result = sortProducts(result, state.sortBy);

  renderProducts(result);
}

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

render();
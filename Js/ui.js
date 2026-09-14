export function renderProducts(products) {
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
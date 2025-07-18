let cart = [];
function addProduct() {
  const name = document.getElementById("pname").value.trim();
  const price = parseFloat(document.getElementById("price").value);
  const cartList = document.getElementById("cartList");
  const totalEl = document.getElementById("total");

  if (!name || isNaN(price) || price <= 0) {
    alert("Please enter valid name and price");
    return;
  }

  cart.push({ name, price });

  cartList.innerHTML = "";
  cart.forEach((item, index) => {
    cartList.innerHTML += `<li>${item.name} - ₹${item.price}</li>`;
  });

  const total = cart.reduce((sum, item) => sum + item.price, 0);
  totalEl.textContent = total.toFixed(2);
}

let cart = [];
let total = 0;

function addToCart(item, price) {
  cart.push({ item, price });
  total += price;
  document.getElementById('totalAmount').textContent = total;
  document.getElementById('message').textContent = `${item} added to cart.`;
}

function placeOrder() {
  const address = document.getElementById('address').value.trim();
  if (cart.length === 0) {
    alert("Your cart is empty!");
    return;
  }
  if (!address) {
    alert("Please enter a delivery address.");
    return;
  }

  // Display receipt
  document.getElementById('receipt').style.display = 'block';
  document.getElementById('receiptList').innerHTML = '';
  cart.forEach(order => {
    const li = document.createElement('li');
    li.textContent = `${order.item} - ₹${order.price}`;
    document.getElementById('receiptList').appendChild(li);

    fetch('/order', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ item: order.item })
    });
  });

  document.getElementById('finalAddress').textContent = address;
  document.getElementById('finalTotal').textContent = total;
  document.getElementById('message').textContent = " Order placed!";
  alert("Thanks! Your order has been placed!");

  // Reset cart
  cart = [];
  total = 0;
  document.getElementById('totalAmount').textContent = 0;
  document.getElementById('address').value = '';
}

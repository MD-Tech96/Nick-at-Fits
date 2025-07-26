// Simple mobile nav toggle
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.getElementById('main-nav');

  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const isOpen = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
  }

  // Render products if #product-list exists
  const list = document.getElementById('product-list');
  if (list) renderProducts(list);

  // Contact form handling (demo)
  const form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      const msgBox = document.getElementById('form-message');
      if (msgBox) {
        msgBox.textContent = "Thank you for contacting us! We'll respond soon.";
      }
      form.reset();
    });
  }
});

// Demo product data
const products = [
  {
    title: "Vintage Denim Jacket",
    price: "$18",
    image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=400&q=80"
  },
  {
    title: "Classic Wooden Chair",
    price: "$25",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80"
  },
  {
    title: "Stack of Novels",
    price: "$10",
    image: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&w=400&q=80"
  },
  {
    title: "Retro Table Lamp",
    price: "$12",
    image: "https://images.unsplash.com/photo-1509395176047-4a66953fd231?auto=format&fit=crop&w=400&q=80"
  },
  {
    title: "Pre-loved Sneakers",
    price: "$15",
    image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80"
  },
  {
    title: "Children’s Toy Set",
    price: "$9",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=400&q=80"
  }
];

function renderProducts(containerEl) {
  containerEl.innerHTML = '';
  products.forEach(prod => {
    const div = document.createElement('div');
    div.className = 'product-card';
    div.innerHTML = `
      <img src="${prod.image}" alt="${prod.title}">
      <div class="product-title">${prod.title}</div>
      <div class="product-price">${prod.price}</div>
      <button class="btn" type="button" onclick="alert('This is a demo. In a real store, this would add to cart.')">Add to Cart</button>
    `;
    containerEl.appendChild(div);
  });
}
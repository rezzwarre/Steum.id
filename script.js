// untuk menampilkan jumlah item di keranjang
let cartCount = 0;

function addToCart(name, price, image) {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  let found = cart.find(item => item.name == name);
  if (found) {
    found.qty = 1;
  } else {
    cart.push({ name, price, qty: 1, image });
  }
  localStorage.setItem('cart', JSON.stringify(cart));
  updateCartCount();
}

let cart = JSON.parse(localStorage.getItem("cart")) || [];

      function formatRupiah(angka) {
        return "Rp " + angka.toLocaleString("id-ID");
      }

      function updateCartDisplay() {
        const cartContainer = document.getElementById("cart-items");
        const totalPrice = document.getElementById("total-price");
        const countBadge = document.getElementById("cart-count");

        cartContainer.innerHTML = "";
        let total = 0;

        cart.forEach((item, index) => {
          const itemDiv = document.createElement("div");
          itemDiv.className = "cart-item";

          itemDiv.innerHTML = `
            <img src="${item.image}" alt="${item.name}" />
            <div class="item-details">
              <h3>${item.name}</h3>
              <p>${formatRupiah(item.price)}</p>
              <button class="remove-btn" onclick="removeItem(${index})">Hapus</button>
            </div>
          `;

          total += item.price;
          cartContainer.appendChild(itemDiv);
        });

        totalPrice.textContent = formatRupiah(total);
        countBadge.textContent = cart.length;
      }

      function removeItem(index) {
        cart.splice(index, 1);
        localStorage.setItem("cart", JSON.stringify(cart));
        updateCartDisplay();
      }

      window.onload = updateCartDisplay;

      function updateCartCount() {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        let count = cart.reduce((sum, item) => sum + item.qty, 0);
        const cartCountElem = document.getElementById('cart-count');
        if (cartCountElem) {
            cartCountElem.innerText = count;
        }
      }

// function formatRupiah(angka) {
//   if (!angka) angka = 0;
//   return 'Rp ' + angka.toLocaleString('id-ID');
// }

// function renderCart() {
//   let cart = JSON.parse(localStorage.getItem('cart')) || [];
//   let container = document.getElementById('cart-container');
//   let total = 0;

//   container.innerHTML = '';

//   if (cart.length === 0) {
//     container.innerHTML = `<p style="text-align:center">Keranjang kosong</p>`;
//   } else {
//     cart.forEach((item, idx) => {
//       let subtotal = item.price * item.qty;
//       total += subtotal;

//       // buat elemen card
//       let card = document.createElement('div');
//       card.classList.add('cart-item');

//       card.innerHTML = `
//         <img src="${item.image}" alt="${item.name}" style="width: 160px; height: 160px;">
//         <h4>${item.name}</h4>
//         <p>Harga: ${formatRupiah(item.price)}</p>
//         <p>Subtotal: ${formatRupiah(subtotal)}</p>
//         <button onclick="removeFromCart(${idx})">Hapus</button>
//       `;

//       container.appendChild(card);
//     });
//   }

//   document.getElementById('cart-total').innerText = formatRupiah(total);
// }

// function removeFromCart(index) {
//   let cart = JSON.parse(localStorage.getItem('cart')) || [];
//   cart.splice(index, 1);
//   localStorage.setItem('cart', JSON.stringify(cart));
//   renderCart();
// }

// renderCart();
// <<====================================================================================================================================>>



// Panggil saat halaman dimuat untuk tampilan 
document.addEventListener('DOMContentLoaded', updateCartCount);

document.addEventListener("DOMContentLoaded", function() {
  const slides = document.querySelectorAll('.hero-img');
  let current = 0;
  const total = slides.length;
  const interval = 2000; // 2 detik

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.style.opacity = (i === index) ? '1' : '0';
      slide.style.transition = 'opacity 1s';
    });
  }

  showSlide(current);

  setInterval(() => {
    current = (current + 1) % total;
    showSlide(current);
  }, interval);
});

document.getElementById('search-btn').addEventListener('click', function() {
  const keyword = document.getElementById('search-input').value.toLowerCase();
  const produkList = document.querySelectorAll('.produk2');
  produkList.forEach(function(produk) {
    const namaGame = produk.querySelector('h3').textContent.toLowerCase();
    if (namaGame.includes(keyword)) {
      produk.style.display = '';
    } else {
      produk.style.display = 'none';
    }
  });
});
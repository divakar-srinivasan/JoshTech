const video = document.getElementById("video");
const playBtn = document.getElementById("play-btn");

playBtn.addEventListener("click", () => {
  if (video.paused) {
    video.play();
    playBtn.style.display = "none";
  } else {
    video.pause();
    playBtn.style.display = "flex";
  }
});

video.addEventListener("click", () => {
  if (video.paused) {
    video.play();
    playBtn.style.display = "none";
  } else {
    video.pause();
    playBtn.style.display = "flex";
  }
});

const kitchenData = [
  { name: "Home made pizza", img: "assets/pizza/pizza1.jpg", rating: "4.7", time: "30-40 min", price: "₹190", offer: "50%" },
  { name: "Cheese burst pizza", img: "assets/pizza/pizza2.jpg", rating: "4.5", time: "25-35 min", price: "₹123" },
  { name: "Veggie pizza", img: "assets/pizza/pizza3.jpg", rating: "4.6", time: "30-40 min", price: "₹170", offer: "20%" },
  { name: "Classic pizza", img: "assets/pizza/pizza4.jpg", rating: "4.8", time: "20-30 min", price: "₹190" },
  { name: "Paneer pizza", img: "assets/pizza/pizza5.jpg", rating: "4.9", time: "30-40 min", price: "₹210", offer: "50%" },
  { name: "Italian pizza", img: "assets/pizza/pizza6.jpg", rating: "4.4", time: "25-35 min", price: "₹160" },
  { name: "Garlic pizza", img: "assets/pizza/pizza7.jpg", rating: "4.3", time: "30-40 min", price: "₹150", offer: "20%" },
  { name: "BBQ pizza", img: "assets/pizza/pizza9.jpg", rating: "4.5", time: "30-40 min", price: "₹200", offer: "50%" },
  { name: "Home made pizza", img: "assets/pizza/pizza1.jpg", rating: "4.7", time: "30-40 min", price: "₹190", offer: "50%" },
  { name: "Cheese burst pizza", img: "assets/pizza/pizza2.jpg", rating: "4.5", time: "25-35 min", price: "₹123" },
  { name: "Veggie pizza", img: "assets/pizza/pizza3.jpg", rating: "4.6", time: "30-40 min", price: "₹170", offer: "20%" },
  { name: "Classic pizza", img: "assets/pizza/pizza4.jpg", rating: "4.8", time: "20-30 min", price: "₹190" },
];

const popularData = [
  { name: "Tandoori Chicken", img: "assets/pizza/pizza1.jpg", rating: "4.3", time: "15-20 min", price: "₹184" },
  { name: "Chili Chicken", img: "assets/pizza/pizza2.jpg", rating: "4.1", time: "24-34 min", price: "₹116", offer: "20%" },
  { name: "Grilled Chicken", img: "assets/pizza/pizza3.jpg", rating: "4.5", time: "20-30 min", price: "₹200" },
  { name: "Paneer pizza", img: "assets/pizza/pizza4.jpg", rating: "4.9", time: "30-40 min", price: "₹210", offer: "50%" },
  { name: "Italian pizza", img: "assets/pizza/pizza5.jpg", rating: "4.4", time: "25-35 min", price: "₹160" },
  { name: "Garlic pizza", img: "assets/pizza/pizza6.jpg", rating: "4.3", time: "30-40 min", price: "₹150", offer: "20%" },
  { name: "BBQ pizza", img: "assets/pizza/pizza9.jpg", rating: "4.5", time: "30-40 min", price: "₹200" }
];

function createKitchenCard({ name, img, rating, time, price, offer }) {
  return `
  <div class="kitchen-card">
    ${offer ? `<div class="offer-badge">${offer}</div>` : ''}
    <img src="${img}" class="card-img" alt="${name}" />
    <div class="card-details">
      <div class="card-header">
        <h3>${name}</h3>
        <h3>${price}</h3>
      </div>
      <div class="card-info">
        <div class="rating-time">
          <span class="card-rating">
            <img src="assets/icons/Vector.svg" alt="star" />
            ${rating}
          </span>
          <div class="card-pill">
            <div class="card-frame">${time}</div>
          </div>
        </div>
        <div class="cart-action">
          <div class="quantity-selector">
            <button class="qty-btn minus hidden" data-action="decrease">−</button>
            <span class="qty-count hidden">1</span>
            <button class="qty-btn plus" data-action="increase">+</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  `;
}

function createCarouselCard({ name, img, rating, time, price, offer }) {
  return `
<div class="carousel-card">
  ${offer ? `<div class="offer-badge">${offer}</div>` : ''}
  <img src="${img}" class="card-img" alt="${name}" />
  <div class="card-details">
    <div class="card-header">
      <h3>${name}</h3>
      <h3>${price}</h3>
    </div>
    <div class="card-info">
      <div class="rating-time">
        <span class="card-rating">
          <img src="assets/icons/Vector.svg" alt="star" />
          ${rating}
        </span>
        <div class="card-pill">
          <div class="card-frame">
            ${time}
          </div>
        </div>
      </div>
<div class="cart-action">
<div class="quantity-selector">
  <button class="qty-btn minus hidden" data-action="decrease">−</button>
  <span class="qty-count hidden">1</span>
  <button class="qty-btn plus" data-action="increase">+</button>
</div>
</div>
</div>
</div>
  
</div>
  `;
}

function renderCards() {
  document.getElementById("kitchenCards").innerHTML = kitchenData.map(createKitchenCard).join("");
  document.getElementById("popularItems").innerHTML = popularData.map(createCarouselCard).join("");
}

let scrollPosition = 0;

function openModal() {
  scrollPosition = window.scrollY;
  document.getElementById("requestModal").style.display = "flex";
  document.body.classList.add("modal-open");
  document.body.style.top = `-${scrollPosition}px`;
}


function closeModal() {
  document.getElementById("requestModal").style.display = "none";
  document.body.classList.remove("modal-open");
  document.body.style.top = '';
  setTimeout(() => {
    window.scrollTo(0, scrollPosition);
    scrollPosition = 0;
  }, 10);

  ["dishName", "dishType", "cuisine", "notes"].forEach(id => {
    const el = document.getElementById(id);
    if (el.tagName === "SELECT") el.selectedIndex = 0;
    else el.value = "";
    el.parentElement.classList.remove("invalid");
  });

  document.getElementById("dishNameError").textContent = "";
  document.getElementById("dishTypeError").textContent = "";
}

function submitRequest() {
  const dishName = document.getElementById("dishName");
  const dishType = document.getElementById("dishType");
  const dishNameError = document.getElementById("dishNameError");
  const dishTypeError = document.getElementById("dishTypeError");
  let valid = true;
  if (!dishName.value.trim()) {
    dishNameError.textContent = "Dish name is required.";
    dishName.parentElement.classList.add("invalid");
    valid = false;
  } else {
    dishNameError.textContent = "";
    dishName.parentElement.classList.remove("invalid");
  }
  if (!dishType.value) {
    dishTypeError.textContent = "Please select a dish type.";
    dishType.parentElement.classList.add("invalid");
    valid = false;
  } else {
    dishTypeError.textContent = "";
    dishType.parentElement.classList.remove("invalid");
  }
  if (!valid) return;
  closeModal();
  const toast = document.getElementById("toast");
  toast.classList.add("show");
  setTimeout(() => {
    toast.classList.remove("show");
  }, 3000);
}

function handleContactSubmit(event) {
  event.preventDefault();
  const name = document.getElementById("contactName");
  const email = document.getElementById("contactEmail");
  const message = document.getElementById("contactMessage");
  const nameError = document.getElementById("nameError");
  const emailError = document.getElementById("emailError");
  const messageError = document.getElementById("messageError");
  let isValid = true;

  if (!name.value.trim()) {
    name.classList.add("input-invalid");
    nameError.textContent = "Name is required.";
    isValid = false;
  } else {
    name.classList.remove("input-invalid");
    nameError.textContent = "";
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email.value.trim()) {
    email.classList.add("input-invalid");
    emailError.textContent = "Email is required.";
    isValid = false;
  } else if (!emailPattern.test(email.value)) {
    email.classList.add("input-invalid");
    emailError.textContent = "Enter a valid email.";
    isValid = false;
  } else {
    email.classList.remove("input-invalid");
    emailError.textContent = "";
  }

  if (!message.value.trim()) {
    message.classList.add("input-invalid");
    messageError.textContent = "Message is required.";
    isValid = false;
  } else {
    message.classList.remove("input-invalid");
    messageError.textContent = "";
  }

  if (!isValid) return;

  document.getElementById("contactForm").reset();
  [name, email, message].forEach(el => el.classList.remove("input-invalid"));

  const toast = document.getElementById("contactToast");
  toast.classList.add("show");
  setTimeout(() => {
    toast.classList.remove("show");
  }, 3000);
}

function setupTrueInfiniteCarousel() {
  const track = document.getElementById("popularItems");
  // Get the computed gap between cards
  const style = window.getComputedStyle(track);
  const gap = parseInt(style.gap || style.columnGap || 0, 10) || 0;
  // Get the actual card width (first card)
  let cardWidth = 277;
  if (track.children.length > 0) {
    cardWidth = track.children[0].offsetWidth;
  }
  const totalWidth = cardWidth + gap;

  if (track.children.length < 3) return;

  let autoSlideInterval;
  let isSliding = false;

  function slideRight() {
    if (isSliding) return;
    isSliding = true;
    track.style.scrollBehavior = 'smooth';
    track.scrollLeft = totalWidth;
    track.addEventListener('transitionend', onTransitionEndRight, { once: true });
    setTimeout(() => {
      onTransitionEndRight();
    }, 400);
  }

  function onTransitionEndRight() {
    track.style.scrollBehavior = 'auto';
    track.appendChild(track.children[0]);
    track.scrollLeft = 0;
    isSliding = false;
  }

  function slideLeft() {
    if (isSliding) return;
    isSliding = true;
    track.style.scrollBehavior = 'auto';
    track.insertBefore(track.lastElementChild, track.firstElementChild);
    track.scrollLeft = totalWidth;
    setTimeout(() => {
      track.style.scrollBehavior = 'smooth';
      track.scrollLeft = 0;
      setTimeout(() => {
        track.style.scrollBehavior = 'auto';
        isSliding = false;
      }, 400);
    }, 20);
  }

  function resetAutoSlide() {
    if (autoSlideInterval) clearInterval(autoSlideInterval);
    autoSlideInterval = setInterval(slideRight, 5000);
  }

  document.querySelector(".arrow-right").onclick = () => {
    slideRight();
    resetAutoSlide();
  };

  document.querySelector(".arrow-left").onclick = () => {
    slideLeft();
    resetAutoSlide();
  };

  document.addEventListener('keydown', function (e) {
    if (document.activeElement === document.body || document.activeElement === track) {
      if (e.key === 'ArrowRight') {
        slideRight();
        resetAutoSlide();
      } else if (e.key === 'ArrowLeft') {
        slideLeft();
        resetAutoSlide();
      }
    }
  });

  const carouselViewport = document.querySelector('.carousel-viewport');
  if (carouselViewport) {
    carouselViewport.addEventListener('mouseenter', () => {
      if (autoSlideInterval) clearInterval(autoSlideInterval);
    });
    carouselViewport.addEventListener('mouseleave', () => {
      resetAutoSlide();
    });
  }

  track.scrollLeft = 0;
  resetAutoSlide();
}

function handleQuantityClick(e) {
  const btn = e.target.closest('button.qty-btn');
  if (!btn) return;
  const action = btn.getAttribute('data-action');
  if (!action) return;
  if (action === 'increase') {
    increaseQty(btn);
  } else if (action === 'decrease') {
    decreaseQty(btn);
  }
}

document.getElementById('kitchenCards').addEventListener('click', handleQuantityClick);
document.getElementById('popularItems').addEventListener('click', handleQuantityClick);

function increaseQty(button) {
  const container = button.parentElement;
  const minusBtn = container.querySelector('.qty-btn.minus');
  const countSpan = container.querySelector('.qty-count');

  if (countSpan.classList.contains('hidden')) {
    minusBtn.classList.remove('hidden');
    countSpan.classList.remove('hidden');
    button.classList.add('active');
    return;
  }

  let count = parseInt(countSpan.textContent, 10);
  countSpan.textContent = ++count;
}

function decreaseQty(button) {
  const container = button.parentElement;
  const plusBtn = container.querySelector('.qty-btn.plus');
  const countSpan = container.querySelector('.qty-count');
  let count = parseInt(countSpan.textContent, 10);

  if (count > 1) {
    countSpan.textContent = --count;
  } else {
    countSpan.textContent = 1;
    countSpan.classList.add('hidden');
    button.classList.add('hidden');
    plusBtn.classList.remove('active');
  }
}

document.addEventListener('DOMContentLoaded', function () {
  const hamburger = document.getElementById('hamburgerMenu');
  const sideNav = document.getElementById('sideNav');
  let sideNavOpen = false;

  if (sideNav && sideNav.children.length === 0) {
    sideNav.innerHTML = `
      <a href="#home">Home</a>
      <a href="#about">About</a>
      <a href="#menu">Menu</a>
      <a href="#blog">Blog</a>
      <a href="#contact">Contact</a>
    `;
  }

  let overlay = document.getElementById('sideNavOverlay');
  if (!overlay) {
    overlay = document.createElement('div');
    overlay.id = 'sideNavOverlay';
    document.body.appendChild(overlay);
  }
  overlay.style.display = 'none';
  overlay.style.position = 'fixed';
  overlay.style.top = 0;
  overlay.style.left = 0;
  overlay.style.width = '100vw';
  overlay.style.height = '100vh';
  overlay.style.background = 'rgba(0,0,0,0.3)';
  overlay.style.zIndex = 99;

  function openSideNav() {
    sideNav.classList.add('open');
    hamburger.classList.add('open');
    overlay.style.display = 'block';
    sideNavOpen = true;
    document.body.style.overflow = 'hidden';
  }

  function closeSideNav() {
    sideNav.classList.remove('open');
    hamburger.classList.remove('open');
    overlay.style.display = 'none';
    sideNavOpen = false;
    document.body.style.overflow = '';
  }

  if (hamburger && sideNav) {
    hamburger.addEventListener('click', () => {
      if (sideNavOpen) {
        closeSideNav();
      } else {
        openSideNav();
      }
    });
    hamburger.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        if (sideNavOpen) {
          closeSideNav();
        } else {
          openSideNav();
        }
      }
    });
    overlay.addEventListener('click', closeSideNav);
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && sideNavOpen) {
        closeSideNav();
      }
    });
    sideNav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', closeSideNav);
    });
  }
});

renderCards();
setupTrueInfiniteCarousel();

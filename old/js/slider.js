const links = document.querySelectorAll('.links li.lists a.anchor');

const productImage = document.getElementById('productImage');
const images = [
  'jpg/photo8.jpg',
  'jpg/photo9.jpg',
  'jpg/photo10.jpg',
  'jpg/photo11.jpg',
  'jpg/photo12.jpg'
];

let currentIndex = 0;

function changeImage(index) {
  productImage.src = images[index];
}

links.forEach(
  (link, index) => {
    link.addEventListener(
      'click', (e) => {
        e.preventDefault();
        currentIndex = index;
        changeImage(currentIndex);
      });
  });

// Optional: Auto-slide functionality
setInterval(() => {
  currentIndex = (currentIndex + 1) % images.length;
  changeImage(currentIndex);
}, 3000);

/** additional functionality created */

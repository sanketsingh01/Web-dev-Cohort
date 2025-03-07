/**
 * Write your challenge solution here
 */
// Image data
const images = [
  {
    url: 'https://plus.unsplash.com/premium_photo-1666863909125-3a01f038e71f?q=80&w=1986&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    caption: 'Beautiful Mountain Landscape',
  },
  {
    url: 'https://plus.unsplash.com/premium_photo-1690576837108-3c8343a1fc83?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    caption: 'Ocean Sunset View',
  },
  {
    url: 'https://images.unsplash.com/photo-1473448912268-2022ce9509d8?q=80&w=2041&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    caption: 'Autumn Forest Path',
  },
  {
    url: 'https://plus.unsplash.com/premium_photo-1680466057202-4aa3c6329758?q=80&w=2138&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    caption: 'Urban City Skyline',
  },
];

const carousel = document.getElementById('carousel');
const carouselTrack = document.getElementById('carouselTrack');
const caption = document.getElementById('caption');
const nextButton = document.getElementById('nextButton');
const prevButton = document.getElementById('prevButton');
const carouselNav = document.getElementById('carouselNav');
const autoPlayButton = document.getElementById('autoPlayButton');
const timerDisplay = document.getElementById('timerDisplay');

let CurrIndex = 0;
let autoPlayActive = false;
let autoPlay;

function LoadImages() {
  images.forEach((image, index) => {
    const slide = document.createElement('div');
    slide.classList.add('carousel-slide');
    slide.style.backgroundImage = `url(${image.url})`;
    carouselTrack.appendChild(slide);

    const indicator = document.createElement('div');
    indicator.classList.add('carousel-indicator');
    if (index === 0) indicator.classList.add('active');
    indicator.addEventListener('click', () => ShowSlide(index));
    carouselNav.appendChild(indicator);
  });

  UpdateCaption();
}

function ShowSlide(index) {
  const slides = document.querySelectorAll('.carousel-slide');
  const indicators = document.querySelectorAll('.carousel-indicator');

  if (index >= images.length) CurrIndex = 0;
  else if (index < 0) CurrIndex = images.length - 1;
  else CurrIndex = index;

  carouselTrack.style.transform = `translateX(-${CurrIndex * 100}%)`;

  indicators.forEach((indicator, i) =>
    indicator.classList.toggle('active', i === CurrIndex)
  );
  UpdateCaption();
}

function UpdateCaption() {
  caption.innerText = images[CurrIndex].caption;
}

function autoPlaytoggle() {
  if (autoPlayActive) {
    clearInterval(autoPlay);
    autoPlayButton.innerText = `Start Auto Play`;
    timerDisplay.innerText = '';
  } else {
    let coundown = 5;
    timerDisplay.innerText = `Next in: ${coundown}s`;

    autoPlay = setInterval(() => {
      coundown--;
      timerDisplay.innerText = `Next in: ${coundown}s`;
      if (coundown === 0) {
        ShowSlide(CurrIndex + 1);
        coundown = 5;
      }
    }, 1000);

    autoPlayButton.innerText = 'Stop Auto Play';
  }

  autoPlayActive = !autoPlayActive;
}

nextButton.addEventListener('click', () => ShowSlide(CurrIndex + 1));
prevButton.addEventListener('click', () => ShowSlide(CurrIndex - 1));
autoPlayButton.addEventListener('click', autoPlaytoggle);
LoadImages();

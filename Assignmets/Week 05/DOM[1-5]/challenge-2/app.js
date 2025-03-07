const MainHeading = document.getElementById('mainHeading');
const Redbtn = document.getElementById('redButton');
const Greenbtn = document.getElementById('greenButton');
const Bluebtn = document.getElementById('blueButton');
const Purplebtn = document.getElementById('purpleButton');
const Resetbtn = document.getElementById('resetButton');

Redbtn.addEventListener('click', () => {
  MainHeading.style.color = '#e74c3c';
});

Greenbtn.addEventListener('click', () => {
  MainHeading.style.color = '#2ecc71';
});

Bluebtn.addEventListener('click', () => {
  MainHeading.style.color = '#3498db';
});

Purplebtn.addEventListener('click', () => {
  MainHeading.style.color = '#9b59b6';
});

Resetbtn.addEventListener('click', () => {
  MainHeading.style.color = '';
});

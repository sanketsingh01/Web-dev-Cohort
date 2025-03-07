/**
 * Write your challenge solution here
 */

const togglebtn = document.querySelector('.toggle-btn');
const panel = document.querySelector('.panel');
const closebtn = document.querySelector('.close-btn');
const menuitems = document.querySelectorAll('.menu-item');

document.addEventListener('click', () => {
  if (panel.classList.contains('active')) {
    panel.classList.remove('active');
  }
});

togglebtn.addEventListener('click', (event) => {
  event.stopPropagation();
  panel.classList.add('active');
});

panel.addEventListener('click', (event) => {
  event.stopPropagation();
});

menuitems.forEach((item) => {
  item.addEventListener('click', () => {
    alert(`${item.innerText}`);
    panel.classList.remove('active');
  });
});

closebtn.addEventListener('click', () => {
  panel.classList.remove('active');
});

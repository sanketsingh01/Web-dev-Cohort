/**
 * Write your challenge solution here
 */

const accordionItem = document.querySelectorAll('.accordion-item');
const accordionButton = document.querySelectorAll('.accordion-button');
const accordianContent = document.querySelectorAll('.accordion-content');

function updateItem(index) {
  closeAll();
  const item = accordionItem[index];

  if (!item.classList.contains('active')) {
    item.classList.add('active');
  } else {
    item.classList.remove('active');
  }
}

function closeAll() {
  accordionItem.forEach((item) => {
    item.classList.remove('active');
  });
}

accordionButton.forEach((button, index) => {
  button.addEventListener('click', () => {
    button.addEventListener('click', updateItem(index));
  });
});

const Togglebtn = document.getElementById('toggleButton');
const Status = document.getElementById('status');
const Bulb = document.getElementById('bulb');

Togglebtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  Bulb.classList.toggle('off');

  if (document.body.classList.contains('dark-mode')) {
    Togglebtn.innerText = 'Turn Off';
    Status.innerText = 'Status: On';
  } else {
    Togglebtn.innerText = 'Turn On';
    Status.innerText = 'Status: Off';
  }
});

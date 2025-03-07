const digitalClock = document.getElementById('digitalClock');
const date = document.getElementById('date');
const clock = document.querySelector('.clock');
const hourhand = document.querySelector('.hand.hour');
const minuteHand = document.querySelector('.hand.minute');
const secondsHand = document.querySelector('.hand.second');

for (let i = 1; i <= 12; i++) {
  const number = document.createElement('div');
  number.className = 'number';
  number.style.setProperty('--rotation', `${i * 30}deg`);
  number.innerHTML = `<span>${i}</span>`;
  clock.appendChild(number);
}

function padZero(num) {
  return num.toString().padStart(2, '0');
}

function Updateclock() {
  const CurrDay = new Date();

  const seconds = CurrDay.getSeconds();
  const minutes = CurrDay.getMinutes();
  const hour = CurrDay.getHours();

  // Cacluating the angle of the clock hands
  const secondRotate = (seconds / 60) * 360;
  const minuteRotate = ((minutes + seconds / 60) / 60) * 360;
  const hourRotate = (((hour % 12) + minutes / 60) / 12) * 360;

  hourhand.style.transform = `translateX(-50%) rotate(${hourRotate}deg)`;
  secondsHand.style.transform = `translateX(-50%) rotate(${secondRotate}deg)`;
  minuteHand.style.transform = `translateX(-50%) rotate(${minuteRotate}deg)`;

  // Updating the digital clock and date
  const text = CurrDay.toLocaleDateString(undefined, {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  digitalClock.innerText = `${padZero(hour)}:${padZero(minutes)}:${padZero(
    seconds
  )}`;

  date.innerText = text;
}

Updateclock();
setInterval(Updateclock, 1000);

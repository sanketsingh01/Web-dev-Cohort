const GameContainer = document.getElementById('gameContainer');

let firstCard;
let secondCard;
let Blockcard = false;
let moves = 0;
let timer = null;
let CurrTime = 0;
let MatchedPairs = 0;

const emojis = ['🐶', '🐱', '🐭', '🐹', '🐰', '🦊', '🐻', '🐼'];
const shuffeldemojis = [...emojis, ...emojis];

function StartGame() {
  shuffelCards(shuffeldemojis);
  resetBoard();
  moves = 0;
  MatchedPairs = 0;
  CurrTime = 0;
  document.getElementById('moves').innerText = `${moves}`;
  GameContainer.innerText = '';

  if (timer) clearInterval(timer);
  timer = setInterval(UpdateTime, 1000);

  // Crrating card for each emoji
  shuffeldemojis.forEach((emoji, index) => {
    const card = document.createElement('div');
    card.className = 'card';
    card.dataset.cardIndex = index;

    card.innerHTML = `
    <div class="card-front"></div>
    <div class="card-back">${emoji}</div>
    `;

    card.addEventListener('click', flipCard);
    GameContainer.appendChild(card);
  });
}
function UpdateTime() {
  CurrTime++;
  const minutes = Math.floor(CurrTime / 60);
  const seconds = CurrTime % 60;
  document.getElementById('time').textContent = `${minutes}:${seconds
    .toString()
    .padStart(2, '0')}`;
}

function shuffelCards(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]]; // Swap elements
  }
}

function flipCard() {
  if (Blockcard) return;
  if (this === firstCard) return;

  this.classList.add('flipped');

  if (!firstCard) {
    firstCard = this;
    return;
  }

  secondCard = this;
  moves++;
  document.getElementById('moves').innerText = `${moves}`;
  Blockcard = true;
  checkForMatch();
}

function checkForMatch() {
  const match =
    shuffeldemojis[firstCard.dataset.cardIndex] ===
    shuffeldemojis[secondCard.dataset.cardIndex];

  if (match) {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);
    MatchedPairs++;
    resetBoard(); // Call resetBoard here
    checkVictory();
  } else {
    setTimeout(() => {
      firstCard.classList.remove('flipped');
      secondCard.classList.remove('flipped');
      resetBoard();
    }, 1000);
  }
}

function checkVictory() {
  setTimeout(() => {
    if (MatchedPairs === shuffeldemojis.length / 2) {
      clearInterval(timer);
      alert(
        `Congrats! Game Completed!🥳\nYou took ${moves} moves and ${timer} minutes to Completed the game!🔥`
      );
    }
  }, 200);
}

function resetBoard() {
  firstCard = null;
  secondCard = null;
  Blockcard = false;
}

function restartGame() {
  StartGame();
}

window.addEventListener('load', StartGame);

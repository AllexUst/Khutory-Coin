const likeButton = document.getElementById('likeButton');
const effectsContainer = document.getElementById('effectsContainer');
const countElement = document.querySelector('.count');
const tap = document.querySelector('#tap');
const lvl = document.querySelector('#goal');
const number = document.querySelector('.number');
const input = document.querySelector('#codes');
const checkButton = document.querySelector('#checkButton');
const message = document.getElementById('message');
const upgradeButton = document.getElementById('upgradeButton');
const upgradeMessage = document.querySelector('.upgrade-message');

let coinsPerClick = 1;
let upgrade = parseInt(localStorage.getItem('upgrade')) || 0; 
let count = parseInt(localStorage.getItem('taps')) || 0;
countElement.textContent = count;

function add() {
    if (count >= 3000) {
        a = count - 3000;
        count = a;
        b = upgrade + 5;
        upgrade = b;
        localStorage.setItem('upgrade', upgrade);
        tap.textContent = coinsPerClick + upgrade;
        upgradeMessage.textContent = "Успішно!";
        upgradeMessage.style.paddingTop = '1em';
    } else {
        upgradeMessage.textContent = "Можна прокачати тільки з 3k+ монет!";
        upgradeMessage.style.paddingTop = '1em';
    }
    countElement.textContent = count;
    localStorage.setItem('taps', count);
    updateContent();
}

likeButton.addEventListener('click', () => {
    createEffect();
    count += coinsPerClick + upgrade;
    localStorage.setItem('taps', count);
    countElement.textContent = count;
    tap.textContent = coinsPerClick + upgrade;
    updateContent()
});

updateContent()

function createEffect() {
    const icon = document.createElement('div');
    icon.classList.add('effect-icon');
    const randomLeft = Math.random() * 60;
    icon.style.left = `${randomLeft}vw`;
    const icons = ['❤️', '⭐'];
    const randomIcon = icons[Math.floor(Math.random() * icons.length)];
    icon.textContent = randomIcon;
    icon.style.color = `hsl(${Math.random() * 100}, 50%, 50%)`;
    effectsContainer.appendChild(icon);
    setTimeout(() => {
        icon.remove();
    }, 2500);
}

let images = {
    vanos: "./images/vanos.jpg",
    razrab: "./images/razrab.jpg",
    lybik: "./images/lybik.jpg",
    titarenko: "./images/titarenko.jpg"
};

checkButton.addEventListener('touchstart', (event) => {
    event.preventDefault();
    count += event.touches.length;
    counter.textContent = `Клики: ${count}`;
});

checkButton.addEventListener('click', () => {
    count += 1;
    counter.textContent = `Клики: ${count}`;
});

function updateContent(){
    if (count >= 500000){
        coinsPerClick = 2 + upgrade;
        lvl.textContent = 'Max Level';
        tap.textContent = `${coinsPerClick}`;
        number.textContent = 6;
        goal.textContent = '∞';
    }
    if (count >= 500000) {
        coinsPerClick = 75 + upgrade;
        lvl.textContent = 'Level 5';
        tap.textContent = `${coinsPerClick}`;
        number.textContent = 6;
        goal.textContent = '1,000,000';
    } else if (count >= 50000) {
        coinsPerClick = 10 + upgrade;
        lvl.textContent = 'Level 4';
        tap.textContent = `${coinsPerClick + upgrade}`;
        number.textContent = 5;
        goal.textContent = '500,000';
    } else if (count >= 5000) {
        coinsPerClick = 5 + upgrade;
        lvl.textContent = 'Level 3';
        tap.textContent = `${coinsPerClick + upgrade}`;
        number.textContent = 4;
        goal.textContent = '50,000';
    } else if (count >= 1000) {
        coinsPerClick = 3 + upgrade;
        lvl.textContent = 'Level 2';
        tap.textContent = ` ${coinsPerClick + upgrade}`;
        number.textContent = 3;
        goal.textContent = '5,000';
    } else if (count >= 300) {
        coinsPerClick = 2 + upgrade;
        lvl.textContent = 'Level 1';
        tap.textContent = coinsPerClick + upgrade;
        number.textContent = 2;
        goal.textContent = '1,000';
    }
    else if (count < 300){
        lvl.textContent = 'Level 0';
        tap.textContent = coinsPerClick + upgrade;
        number.textContent = 2;
        goal.textContent = '300';
    }
}

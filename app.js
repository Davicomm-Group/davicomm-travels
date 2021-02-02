console.log('Hello World');

// simulates a typing motion
const textNode = document.querySelector('#text');
let letterIndex = 0;
let wordIndex = 0;
(function animateText() {
    const inputs = [` Affordable Flights   `, ` Flight to top Destinations   `, ` Discounted Flights   `, ` Visa Support Services   `];
    let currentWord = inputs[wordIndex];

    if (currentWord.length === letterIndex) {
        letterIndex = 0;
        ++wordIndex;
    }
    if (wordIndex === inputs.length) {
        wordIndex = 0;
    }

    textNode.textContent = currentWord.slice(0, letterIndex);
    letterIndex ++
    let done = true;
    done == true ? setTimeout(animateText, 0.2 * 1000) : done = false;

})();

// changes the background image of the screen
const background = document.querySelector('.background');
let index = 0;
setInterval(() => {
    let images = ['./images/picture1.jpeg', './images/picture2.jpg', 
    './images/picture3.jpg', './images/picture4.jpg', './images/picture5.webp', 
    './images/picture6.jpg', './images/picture7.jpg', './images/picture8.png',
    './images/tinapa.jpg', './images/zanzibar.jpg'];
    background.style.backgroundImage = `linear-gradient(rgba(41, 41, 41, 0.555), rgba(41, 41, 41, 0.555)), url('${images[index]}')`;
    ++index;
    if (index === images.length) {
        index = 0;
    }
}, 5 * 1000);
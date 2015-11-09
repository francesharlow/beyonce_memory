console.log("main is linked");

// Pseudocoding
// add eventListeners to the individual boxes aka 'cards' so that, when clicked,
// they 'flip over' to show an img
// each turn consists of 2 clicks, then if they are not a match, both cards flip back over and the images are no longer visible
// when the imgs are a match, they remain visible
// the game ends when all the pairs have been identified

var resetButton = document.querySelector('#reset');
var allCards = document.querySelectorAll('.card');

var player = {
  firstClickImg: '',
  secondClickImg: '',
  firstClick: '',
  secondClick: '',
  reset: function(){
    this.firstClick = undefined;
    this.secondClick = undefined;
    this.firstClickImg = undefined;
    this.secondClickImg = undefined;
  }
};

var counter = 0;

// var Card = function Card (imgSrc, element) {
//   this.imgSrc = imgSrc;
//   this.element = element;
// };

var cardDeck;
var newCardArray = [];

var beyonces = ['img/beyonce_1.gif','img/beyonce_2.gif','img/beyonce_3.gif','img/beyonce_4.gif','img/beyonce_5.gif','img/beyonce_6.gif'];

var setUpBoard = function(){
  // take a random sample of the imgs that is equal to half the total number of cards
  var randomBeyonceSample = _.sample(beyonces,(allCards.length / 2));
  // create new array in which each item in the random sample appears exactly twice
  cardDeck = _.flatten([randomBeyonceSample,randomBeyonceSample]);
  //reshuffle the array
  _.shuffle(cardDeck);
  // iterate through the array, creating a new img for each item, giving each img a corresponding src, adding to it the class of hidden
  for (var i = 0; i < cardDeck.length; i ++){
    var newCard = document.createElement('img');
    newCard.src = cardDeck[i];
    newCard.classList.add('hidden');
    // push the newly formed card to another array so it can be appended to each item in allCards
    newCardArray.push(newCard);
    // append each card, with its img, src, and class of hidden, to an existing card div 
    allCards[i].appendChild(newCardArray[i]);
    // add an event listener to each card so that, when clicked, it removes the class of hidden
    allCards[i].addEventListener('click',function () {
      cardDeck = event.target.children[0]
      cardDeck.classList.remove('hidden');
      // upon, add the img src to the player object key called firstClick
      if (counter === 0) {
        player.firstClickImg = cardDeck.src;
        player.firstClick = cardDeck;
        counter++;
        console.log(counter);
        console.log(player);
      // add the second click's img src to the player object key called secondClick
      } else if (counter === 1) {
        player.secondClickImg = cardDeck.src;
        player.secondClick = cardDeck;
        counter++;
        // console.log(counter);
        // console.log(player.firstClick);
        // console.log(player.secondClick);
          if (counter === 2 && player.firstClickImg !== player.secondClickImg) {
          console.log(counter);
          console.log(player.firstClick);
          console.log(player.secondClick);
          window.setTimeout(player.firstClick.classList.add('hidden'),2000);
          window.setTimeout(player.secondClick.classList.add('hidden'),2000);
        };
      };  
    });
  };
};

setUpBoard();

// var takeTurn = function(event){
//   if (counter === 0) {
//     player.firstClick = cardDeck.src;
//     counter++;
//     console.log(counter);
//     console.log(player);
//   } else if (counter === 1) {
//     player.secondClick = cardDeck.src;
//     counter ++;
//     console.log(counter);
//     console.log(player);
//   } else if (counter === 2 && player.firstClick !== player.secondClick) {
//     window.setTimeout(cardDeck.classList.add('hidden'),1000);
//   }
// };

// takeTurn();

// create a new array 'cards' containing card objects
// var Card = function(imageSrc){

// }

// {
//   imageSrc: 'askdfajsdkjf',
//   element: {} 
// } 

// card object should have a imageSrc property that points to the src string
// and a element property that points to the DOM element that you create.

// For shuffling look up underscore.js library.

// Go through cards array and append each card element 

var addRow = function(){

};

// addButton.addEventListener('click',addRow);

resetButton.addEventListener('click',setUpBoard);


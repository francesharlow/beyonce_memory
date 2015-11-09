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

var cardDeck;
var newCardArray = [];

var beyonces = ['img/beyonce_1.gif','img/beyonce_2.gif','img/beyonce_3.gif','img/beyonce_4.gif','img/beyonce_5.gif','img/beyonce_6.gif'];

var hideCards = function(){
  player.firstClick.classList.add('hidden');
  player.secondClick.classList.add('hidden');
  player.reset();
  counter = 0;
};

var takeTurn = function(event){
  cardDeck = event.target.children[0];
  // console.log(cardDeck);
  cardDeck.classList.remove('hidden');
  // console.log(counter);
  if (counter === 0) {
    player.firstClickImg = cardDeck.src;
    player.firstClick = cardDeck;
    counter++;
    // console.log(counter);
    // console.log(player);
  } else if (counter === 1) {
    player.secondClickImg = cardDeck.src;
    player.secondClick = cardDeck;
    counter ++;
    // console.log(counter);
    // console.log(player);
    if (player.firstClickImg !== player.secondClickImg) {
      // console.log(counter);
      // console.log(cardDeck.classList);
      window.setTimeout(hideCards, 1500);
    } else {
      counter = 0;
    }
  }
};
  // upon clicking, add the img src to the player object key called firstClick

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
    allCards[i].addEventListener('click', takeTurn);
  }
};

setUpBoard();

var addRow = function(){

};

// addButton.addEventListener('click',addRow);

resetButton.addEventListener('click',setUpBoard);

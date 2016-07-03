console.log("main is linked");

// Pseudocoding
// add eventListeners to the individual units aka 'cards' so that, when clicked,
// they 'flip over' to show an img
// each turn consists of 2 clicks, then if they are not a match, both cards flip back over and the images are no longer visible
// when the imgs are a match, they remain visible
// the game ends when all the pairs have been identified

var counter = 0;

var resetButton = document.querySelector('#reset');
var addButton = document.querySelector('#add');
var allCards = document.querySelectorAll('.l-box');

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



var randomBeyonceSample;
var cardDeck;
var newCard;
var newCardArray = [];
var newRowArray = [];

var beyonces = ['img/beyonce_1.gif','img/beyonce_2.gif','img/beyonce_3.gif','img/beyonce_4.gif','img/beyonce_5.gif','img/beyonce_6.gif','img/beyonce_7.gif','img/beyonce_8.gif','img/beyonce_9.gif','img/beyonce_10.gif','img/beyonce_11.gif'];

var hideCards = function(){
  player.firstClick.classList.add('hidden');
  player.secondClick.classList.add('hidden');
  player.reset();
  counter = 0;
};

var takeTurn = function(event){
  cardDeck = event.target.children[0];
  cardDeck.classList.remove('hidden');
  if (counter === 0) {
    // push the img src to a key-value pair in the object called player
    player.firstClickImg = cardDeck.src;
    // push the div itself into player object so it can be hidden again if needed
    player.firstClick = cardDeck;
    // increase counter by 1
    counter++;
  } else if (counter === 1) {
    player.secondClickImg = cardDeck.src;
    player.secondClick = cardDeck;
    counter ++;
    // compare imgs to determine if same
      if (player.firstClickImg !== player.secondClickImg) {
        // console.log(cardDeck.classList);
        // if imgs aren't the same, hide them again after 1.5 seconds
        window.setTimeout(hideCards, 1500);
      } else {
        // reset counter to zero
      counter = 0;
    }
  }
};

var setUpBoard = function(){
  // take a random sample of the imgs that is equal to half the total number of cards
  // underscore library courtesy of https://github.com/jashkenas/underscore
  randomBeyonceSample = _.sample(beyonces,(allCards.length / 2));
  // create new array in which each item in the random sample appears exactly twice
  cardDeck = _.flatten([randomBeyonceSample,randomBeyonceSample]);
  //reshuffle the array
  _.shuffle(cardDeck);
  // iterate through the array, creating a new img for each item, giving each img a corresponding src, adding to it the class of hidden
  for (var i = 0; i < cardDeck.length; i ++){
    newCard = document.createElement('img');
    newCard.src = cardDeck[i];
    newCard.classList.add('hidden');
    // push the newly formed card to another array so it can be appended to each item in allCards
    newCardArray.push(newCard);
    // append each card, with its img, src, and class of hidden, to an existing card div
    allCards[i].appendChild(newCardArray[i]);
    // add an event listener to each card so that, when clicked, it invokes takeTurn()
    allCards[i].addEventListener('click', takeTurn);
  }
};

setUpBoard();
  
var addRow = function(){
  var allColumns = document.querySelectorAll('.column');
  // console.log(allColumns);
  for (var i = 0; i < allColumns.length; i ++) {
    var newRow = document.createElement('div');
    newRow.classList.add('card');
    newRowArray.push(newRow);
    allColumns[i].appendChild(newRowArray[i]);
  }
  resetBoard();
};

var resetBoard = function(){
  var allCards = document.querySelectorAll('.card');
  // console.log(allCards);
  // console.log(newCardArray);
  // for (var i = 0; i < cardDeck.length; i ++){
  //   allCards[i].removeChild(newCardArray[i]);
  //   allCards[i].removeEventListener('click',takeTurn);
  // };
  // take a new random sample of the imgs that is equal to half the total number of cards
  randomBeyonceSample = _.sample(beyonces,(allCards.length / 2));
  cardDeck = _.flatten([randomBeyonceSample,randomBeyonceSample]);
  _.shuffle(cardDeck);
  var newCardArray = [];
  // console.log(cardDeck);
  for (var i = 0; i < cardDeck.length; i ++){
    newCard = document.createElement('img');
    newCard.src = cardDeck[i];
    newCard.classList.add('hidden');
    newCardArray.push(newCard);
    // console.log(cardDeck);
    // console.log(allCards);
    // console.log(newCardArray);
    allCards[i].appendChild(newCardArray[i]);
    // console.log(allCards[i]);
    allCards[i].addEventListener('click', takeTurn);
  }
};

// resetButton.addEventListener('click',resetBoard);

// addButton.addEventListener('click',addRow);


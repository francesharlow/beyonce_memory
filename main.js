console.log("main is linked");

var resetButton = document.querySelector('#reset');
var allCards = document.querySelectorAll('.card');

var player = {
  firstClick: '',
  secondClick: '',
  reset: function(){
    this.firstClick = undefined;
    this.secondClick = undefined;
  }
};

var counter = 0;

var Card = function Card (imgSrc, element) {
  this.imgSrc = imgSrc;
  this.element = element;
}

var cardDeck;
var newCard;
var newCardArray = [];

var beyonces = ['img/beyonce_1.gif','img/beyonce_2.gif','img/beyonce_3.gif','img/beyonce_4.gif','img/beyonce_5.gif','img/beyonce_6.gif']

//add eventListeners to the individual boxes aka 'cards' so that, when clicked,
// they 'flip over' to show an img

//each 'turn' consists of 2 clicks, then both cards flip back over and the images are no longer visible

//when the imgs are the same, the eventListener is removed so they stay visible

//the game ends when all the pairs have been identified

var setUpBoard = function(){
  // take a random sample of the imgs that is equal to half the total number of cards
  var randomBeyonceSample = _.sample(beyonces,(allCards.length / 2));
  // create new array in which each item in the random sample appears exactly twice
  var cardDeck = _.flatten([randomBeyonceSample,randomBeyonceSample]);
  //reshuffle the array
  _.shuffle(cardDeck);
  // iterate through the array, creating a new img for each item, give each img a corresponding src, add to it the class of hidden
  for (var i = 0; i < cardDeck.length; i ++){
    newCard = document.createElement('img');
    newCard.src = cardDeck[i];
    newCard.classList.add('hidden');
    // push the newly formed card to another array so it can be appended to each item in allCards
    // append each card, with its img, src, and class of hidden, to an existing card div 
    newCardArray.push(newCard);
    allCards[i].appendChild(newCardArray[i]);
    allCards[i].addEventListener('click',function () {
      event.target.children[0].classList.remove('hidden');
      if (counter === 0) {
        player.firstClick = event.target.children[0].src;
        counter++;
        console.log(counter);
        console.log(player);
      } else if (counter === 1) {
        player.secondClick = event.target.children[0].src;
        console.log(counter);
        console.log(player);
      };
      // if (player.firstClick !== player.secondClick) {
      //   window.setTimeout(event.target.children[0].classList.add('hidden'),1000);
      // } 
    });
  }
};

setUpBoard();

var takeTurn = function(){

}


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


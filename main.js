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

var Cards = function(imageSrc, element) {
  this.imgSrc = '';
  this.element = '';
}

var beyonces = ['img/beyonce_1.gif','img/beyonce_2.gif','img/beyonce_3.gif','img/beyonce_4.gif','img/beyonce_5.gif','img/beyonce_6.gif']

//add eventListeners to the individual boxes aka 'cards' so that, when clicked,
// they 'flip over' to show an img

//each 'turn' consists of 2 clicks, then both cards flip back over and the images are no longer visible

//when the imgs are the same, the eventListener is removed so they stay visible

//the game ends when all the pairs have been identified

var startGame = function(event){
  // take a random sample of the imgs that is equal to half the total number of cards
  var randomBeyonceSample = _.sample(beyonces,(allCards.length / 2));
  // iterate through the random sample array, creating a new img for each item
  // give each img an src of 
  var cardDeck = [];
  

  var firstStack = randomBeyonceSample.map(function(beyonce.Img){
    beyonceImg = document.createElement('img');
    beyonceImg.src = 
  })

  for (var i = 0; i < randomBeyonces.length; i++){
    beyonceImg = document.createElement('img');
  };
  for (var i = 0; i < randomBeyonces.length; i++){
    beyonceImg = document.createElement('img');
  };
  beyonceImg.src = randomBeyonces[i];
  event.target.appendChild(beyonceImg);

};


var takeTurn = function(){
  player.firstClick
  player.secondClick
} 

// start function
// iterate through beyonces twice. sample if you want a smaller subset
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



var resetGame = function(){
  
};

var addRow = function(){

};

// addButton.addEventListener('click',addRow);

resetButton.addEventListener('click',resetGame);

startGame();

// for (var i = 0; i < allCards.length; i++) {
//   allCards[i].addEventListener('click',startGame);
// };


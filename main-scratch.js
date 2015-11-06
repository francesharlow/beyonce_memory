console.log("main is linked");

var resetButton = document.querySelector('#reset');
var allCards = document.querySelectorAll('.card');
var counter = 0;


var cardOne = allCards[0]
var cardTwo = allCards[1]
var cardThree = allCards[2]
var cardFour = allCards[3]
var cardFive = allCards[4]
var cardSix = allCards[5]
var cardSeven = allCards[6]
var cardEight = allCards[7]

var beyonces = ['img/beyonce_1.gif','img/beyonce_2.gif','img/beyonce_3.gif','img/beyonce_4.gif','img/beyonce_5.gif','img/beyonce_6.gif']

//add eventListeners to the individual boxes aka 'cards' so that, when clicked,
// they 'flip over' to show an img

//each 'turn' consists of 2 clicks, then both cards flip back over and the images are no longer visible

//when the imgs are the same, the eventListener is removed so they stay visible

//the game ends when all the pairs have been identified

var resetGame = function(){
  
}

var addRow = function(){

}

// var pickOne = function(event) {
//   var firstPick = document.createElement('img');
//     firstPick.src = shuffle(beyonces)[0];
//   };
//   event.target.appendChild(firstPick);
// }

// var pickOne = function(event) {
//     var firstPick = document.createElement('img');
//     randomCard = Math.floor(Math.random() * (beyonces.length - 0)) + 0;
//     firstPick.src = beyonces[randomCard];
//     event.target.appendChild(firstPick)
//     counter++
//     if (counter === 2 && !firstPick === ) {
//       .classList.add('hidden')
//     }
// };

var flipCards = function(event){
  var firstPick = document.createElement('img');
  randomCard = Math.random();
  if (randomCard < 0.25) {
    firstPick.src = beyonces[0];
  } else if (0.25 <= randomCard < 0.50) {
    firstPick.src = beyonces[1];
  } else if (0.50 <= randomCard < 0.75) { 
    firstPick.src = beyonces[2];
  } else if (0.75 <= randomCard < 1) {
    firstPick.src = beyonces[3];
  }
  event.target.appendChild(firstPick)
};

// addButton.addEventListener('click',addRow);

resetButton.addEventListener('click',resetGame);

for (var i = 0; i < allCards.length; i++) {
  allCards[i].addEventListener('click',flipCards);
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
// car object should have a imageSrc property that points to the src string
// and a element property that points to the DOM element that you create.

// For shuffling look up underscore.js library.

// Go through cards array and append each card element 

var player = {
  firstClick: '',
  secondClick: '',
  reset: function(){
    this.firstClick = undefined;
    this.secondClick = undefined;
  }
}

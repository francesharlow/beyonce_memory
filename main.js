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

var beyonces = ['img/beyonce_1.gif','img/beyonce_2.gif','img/beyonce_3.gif','img/beyonce_4.gif']

//add eventListeners to the individual boxes aka 'cards' so that, when clicked,
// they 'flip over' to show an img

//each 'turn' consists of 2 clicks, then both cards flip back over and the images are no longer visible

//when the imgs are the same, the eventListener is removed so they stay visible

//the game ends when all the pairs have been identified

var resetGame = function(){
  
}

var flipCard = function(event){
  var pickOne = document.createElement('img')
  randomCard = math.Random();
  if (randomCard < 0.25) {
    pickOne.src = beyonces[0]
  } else if (0.25 <= randomCard < 0.50) {
    pickOne.src = beyonces[1]
  } else if (0.50 <= randomCard < 0.75) { 
    pickOne.src = beyonces[2]
  } else {
    pickOne.src = beyonces[3]
  };
  event.target.appendChild(pickOne)
}

resetButton.addEventListener('click',resetGame);
// addButton.addEventListener('click',addAnotherRow);

for (var i = 0; i < allCards.length; i++) {
  allCards[i].addEventListener('click',flipCard);
}
console.log();

/* global $, sessionStorage */

$(document).ready(runProgram); // wait for the HTML / CSS elements of the page to fully load, then execute runProgram()
  
function runProgram(){
  ////////////////////////////////////////////////////////////////////////////////
  //////////////////////////// SETUP /////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  // Constant Variables
  const FRAME_RATE = 60;
  const FRAMES_PER_SECOND_INTERVAL = 1000 / FRAME_RATE;
  


  var KEY = {
    "UP": 38,
    "DOWN": 40,
    "W": 87,
    "S": 83,
  }

  // Game Item Objects
  
  
  var positionX = 0; 
  var speedX = 0; 
  var positionY = 0;
  var speedY = 0;

  function factory(elementId) {
var gameItem = {};
gameItem.id = elementId;
gameItem.x = parseFloat($(elementId).css('left'));
gameItem.y = parseFloat($(elementId).css('top'));
gameItem.width = $(elementId).width();
gameItem.height = $(elementId).height();
gameItem.speedX = 0;
gameItem.speedY = 0;
return gameItem;
}

var leftpaddle = factory("#leftpaddle");
var rightpaddle = factory("#rightpaddle");
var ball = factory("#ball");

  // one-time setup
  let interval = setInterval(newFrame, FRAMES_PER_SECOND_INTERVAL);   // execute newFrame every 0.0166 seconds (60 Frames per second)
  
  $(document).on('keydown', handleKeyDown);                           // change 'eventType' to the type of event you want to handle
  $(document).on('keyup', handleKeyUp); 
startBall()


function handleKeyDown(event) { 
  if (event.which === KEY.W) {
    console.log("w pressed");
  }
 else if (event.which === KEY.S) {
    console.log("s pressed");
  }
  else if (event.which === KEY.UP) {
    console.log("up pressed");
  }
 else if (event.which === KEY.DOWN) {
    console.log("down pressed");
  }

  if (event.which === KEY.W) {
    speedY = -5;
  }
  else if (event.which === KEY.S) {
    speedY = 5
  }
  if (event.which === KEY.UP){
    speedY = -5
  }
  else if (event.which === KEY.DOWN){
    speedY = 5
  }
}

function handleKeyUp(event) {
if (event.which === KEY.W) {
  speedY = 0;
}
else if (event.which === KEY.S) {
  
  speedY = 0
}
if (event.which === KEY.UP){
  speedY = 0
}
else if (event.which === KEY.DOWN){
  speedY = 0
}
}
  ////////////////////////////////////////////////////////////////////////////////
  ///////////////////////// CORE LOGIC ///////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  /* 
  On each "tick" of the timer, a new frame is dynamically drawn using JavaScript
  by calling this function and executing the code inside.
  */
  function newFrame() {
    repositionGameItem()
    redrawGameItem() //yes
  }
  
 
   
  //Called in response to events.

    


  function handleEvent(event) {

  }

  ////////////////////////////////////////////////////////////////////////////////
  ////////////////////////// HELPER FUNCTIONS ////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////
  
  function repositionGameItem() {
    positionX += speedX
    positionY += speedY
  }

  function redrawGameItem() {
    $("#rightPaddle").css("right", positionX);
    $("#rightPaddle").css("top", positionY);

    
   
    $("#leftPaddle").css("top", positionY);
  }

  function startBall(){
    $("#ball").css("center", positionX);
    $("#ball").css("center", positionY);

    
  }
  
  function endGame() {
    // stop the interval timer
    clearInterval(interval);

    // turn off event handlers
    $(document).off();
  }
}
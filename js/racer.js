
$(document).ready(function(){

var trackLength = 0;

function set () {                                                       //Function to let user set track length and build it.
  trackLength = 0;  
  trackLength  = prompt("P1 use 'p' to move. \nP2 use 'q' to move.", 
                        "Set a track length. MIN 5 - MAX 30 ");
  
  if (trackLength > 30) {
    trackLength = 30;
  }
  if (trackLength < 5) {
    trackLength = 5;
  }
  
  for (var i = 6; i <= trackLength; i++) {
    $("#player1_strip").append("<td>");
    $("#player2_strip").append("<td>");
  };
  $( '#player1_strip td:last-child').addClass( 'end' );
  $( '#player2_strip td:last-child').addClass( 'end' );
  mine();
  console.log(trackLength);
}

function mine() {
  //  pcik a random Number
console.log("mine");
//  var mineCell = (#) add a mine to the track
}


set();




$(document).on('keyup', function(keyID) {     //Listener added

  if (keyID.keyCode === 80){                  // if q is pressed
   // if (p1Moves<=trackLength) {                // and p1 is not at the ned of the track
      updatePlayer('player1_strip');          // call this function
 }
  
  else if (keyID.keyCode === 81) {
   // if (p2Moves<=trackLength) {
      updatePlayer('player2_strip');
 
}                                            //end listener


function updatePlayer (player) {               //Updates player position by adding and removing active class to table cells.

  var activeCell = $("#" + player + " td.active");
  var moveCell = activeCell.next();
  var backCell = activeCell.prev();
  var mineCell = $("#" + player + " td.mine");

  activeCell.removeClass("active");               
  moveCell.addClass("active");

  if (moveCell.hasClass('mine')) {
    backCell.addClass('active');
    moveCell.removeClass('active'); 
    mineCell.removeClass("mine");
  }

  if (activeCell.hasClass('end')) {
     win(player);
  }
}

function win(winner) {
  if (winner === 'player2_strip'){
      winner = 'Player 2';
  }
  else {
      winner = 'Player 1';
  }
  alert (winner+" has won");                    
  location.reload();                        
}
                                            
}); 
});                                                    
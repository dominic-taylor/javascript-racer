
$(document).ready(function(){

var trackLength = 0;
var p1moves = 0;
var p2moves = 0;
var mineNum = 0;               // TO increase the liklihood of a mine on the track to I make what var do i change?


function set () {  
  p1moves = 0;
  p2moves = 0;
  mineNum = 0;                                                     //Function to let user set track length and build it.
  trackLength = 10;  
  trackLength  = prompt("P1 use 'p' to move. \nP2 use 'q' to move.\nSet a track length. MIN 10 - MAX 50",
                        " 10 ");
  
   if (trackLength === null) {
    trackLength = 10;
  }
  if (trackLength > 50) {
    trackLength = 50;
  }
  if (trackLength < 10 ) {
    trackLength = 10;
  }
  
  for (var i = 6; i <= trackLength; i++) {
    $("#player1_strip").append("<td>");
    $("#player2_strip").append("<td>");
  };
  $( '#player1_strip td:last-child').addClass( 'end' );
  $( '#player2_strip td:last-child').addClass( 'end' );
  mine();
  console.log(trackLength);
  console.log(mineNum + " mines")
}

function mine(target) {
                                        // also how to nake sure mine appears ahead of the racer. 
  var mine1 = Math.floor(Math.random() * (trackLength - 3 + 1)) + 3;
  var mine2 = Math.floor(Math.random() * (trackLength - 3 + 1)) + 3;
  
  if ((target === 'player2_strip') && (mineNum < 4))
    { 
    mine2 = Math.floor(Math.random() * (trackLength - p2moves)) + p2moves + 3;
  
    $('#player2_strip td:nth-child('+ mine2 +')').addClass('mine');
    mineNum = mineNum + 1;
    
    }
  else if ((target === 'player1_strip') && (mineNum < 4)) 
    {
     mine1 = Math.floor(Math.random() * (trackLength - p1moves)) + p1moves + 3;

     $('#player1_strip td:nth-child('+ mine1 +')').addClass('mine');
    mineNum = mineNum + 1;

    }
  else if (mineNum < 4)
    {
    $('#player1_strip td:nth-child('+ mine1 +')').addClass('mine');
    $('#player2_strip td:nth-child('+ mine2 +')').addClass('mine');
    mineNum = mineNum + 2;
 
    }
      console.log((mine1 +' mine 1'));
      console.log((mine2 +' mine 2'));

}


set();



$(document).on('keyup', function(keyID) {     //Listener added

  if (keyID.keyCode === 80){                  // if q is pressed
    updatePlayer('player1_strip');  
    p1moves++;        // call this function
    if ( p1moves -4> p2moves){
        mine('player1_strip');
    }
  }  
  if (keyID.keyCode === 81) {
    updatePlayer('player2_strip');
    p2moves++;
    if ( p2moves -4 > p1moves) {
      mine('player2_strip');
    }
  }
      console.log(p1moves)    
          console.log(p2moves)    


 });                                             //end listener

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
    mineNum--;
    if (player === 'player1_strip') {
      p1moves = p1moves-2;
    }
    if (player === 'player2_strip') {
      p2moves = p2moves-2;
    }
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
                                                    
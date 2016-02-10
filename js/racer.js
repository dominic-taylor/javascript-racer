
$(document).ready(function(){

var p1Moves = 0;
var p2Moves = 0;
var trackLength = 3;

function set () {                                                       //Function to let user set track length and build it.
    
  trackLength = prompt("P1 use 'p' to move. \nP2 use 'q' to move.", 
                        "Set a track length. MAX 30");
    
  if (trackLength > 30) {
      trackLength = 30;
  }
  if (trackLength < 3) {
      trackLength = 3;
  }

  for (var i = 1; i <= trackLength; i++) {
     
      $("#player1_strip").append("<td>");
      $("#player2_strip").append("<td>");
  };

  mine();
}

set();

$(document).on('keyup', function(keyID) {     //Listener added

  if (keyID.keyCode === 80){                  // if q is pressed
    if (p1Moves<=trackLength) {                // and p1 is not at the ned of the track
      updatePlayer('player1_strip');          // call this function
      p1Moves++;                              // and add one to this counter. Once it has reached the tracklength value,
    }
    else {
      win("P1");                              //  the win function is called. 
    } 
  }
  else if (keyID.keyCode === 81) {
    if (p2Moves<=trackLength) {
      updatePlayer('player2_strip');
      p2Moves++;
    }
    else {
      win("P2");
    } 
  }   
});                                            //end listener


function updatePlayer (player) {               //Updates player position by adding and removing active class to table cells.

  var activeCell = $("#" + player + " td.active");
  var moveCell = activeCell.next();
  var mineCell = $("#" + player + " td.mine");

  activeCell.removeClass("active");               
  moveCell.addClass("active");
  // purt in here if active calss equals mine then player moves minus 2, acttive calss  = active cell - 2 ? 
  if (activeCell === mineCell) {
    activeCell.removeClass("active");
    mineCell.removeClass("mine");
  }
};

function win(winner) {
  alert (winner+" has won");                    //Lets user know who won
 

  
    location.reload();                          //NOTE; I have made the page reload after a player wins because I could not figure out
                                                //how to delete the tds from my table, which meant a user either had to keep the same 
}                                               //length track or my code would add their track choice to what was already there, and it 

function mine() {
  //  pcik a random Number
console.log("mine");
//  var mineCell = (#) add a mine to the track

}                                                //would get longer and longer. I wanted the user to be able to choose the track length every time
                                                // so went with a page reload, which is probably not the 'proper' way to do it, but the quickest.

});

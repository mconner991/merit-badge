/* Guess Game: Random Integer-Driven JavaScript While Loop
 * Format: while (boolean expression) {} -- indent block code 
 */

var answer= Math.floor(Math.random()*100)+1;
alert(answer);
var guess= 0
while (guess != answer){
  guess=prompt("guess a number between 1 and 100 ");
  if (guess == "q") break;
  if (validator(guess)==true){
	 turns++
    if (guess < answer) alert("too low");
  	// If guess more than answer, say too high. 
    else if (guess > answer) alert("too high");
    }
  else alert("invalid guess. retry!");
}
alert("you win");
if (guess == answer) alert("You got it in "+turns+" turns.");
else alert("Quiter!");
function validator(guess){
  if (guess > 0 && guess < 101) return true;
  else return false;
}

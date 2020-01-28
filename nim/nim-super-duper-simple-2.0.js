/* Nim Super Duper Simple  */
// declare variables for count (integer) and winner (string) as 0 and null. 
var count = 0,turn = 0, winner = null;
// set a loop to run until someone loses (counts 21 or over).
while (count < 21){
	// the computer's turn is a random integer between 1 and 3
	turn = Math.floor(Math.random()*3)+1;
	// add turn to count
	count += turn;
	// alert the computer's turn and the current count
	alert("computer counts "+turn+" and the count is now "+count+);
	// set the winner as "you" since, given the computer just went, you'd be the winner if game over. 
	if (count >=21) winner = "you";
// if the computer didn't just count 21, do more stuff
	else { 
// set turn equal to a prompt ("Count how many? 1-3") and parse that input as an integer
		turn = prompt("count how many? 1-3");
// add turn to count 
		count += turn;
// say the current count
		alert ("count is now +count+")
// set the winner as "CPU" (since, if you just counted to 21, computer would win. 
		winner = cumputer
// close the conditional
	}
// close the loop
}
// alert that game is over and say who won. 

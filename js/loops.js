
/*
1) Look at the following for loop. Uncomment the code. Check it works, it should output the numbers 1 to 10. Modify the loop so that it does the following:
a) Output the numbers 0 to 50
b) Outputs the numbers 50 to 100
c) Re-write the loop as a while loop
*/

/*
for(let i=1;i<=10;i++){
    console.log(i);
}
*/

/*
2) Write a JavaScript program that asks the user for their name and then for a number. The program should output the user's name repeatedly. e.g. If the user enters 4 for the number their name should be printed 4 times. If they enter 6, the name should be printed 6 times
*/

/*
3) Write a JavaScript program that asks the user for a number and then uses a for loop to output the times table for that number. Here is some code to get you started:
*/

/*
const userNum=prompt("Tell me a number");
for(let i=1;i<=12;i++)
{
    console.log(i);
}
*/

/*
4) Uncomment the following program. It is a simple quiz where the user gets three guesses. Run the code in a browser to see what it does.
a) Can you re-write this program using a for loop so that the code is more efficient and easier to maintain?
b) One problem is that if the user answers correctly on the first attempt they are still asked two more times. Do some research into the 'break' statement e.g. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/break
*/

/*
let userGuess;
alert("You get three guesses for the following question");

userGuess=parseInt(prompt("How many times have Huddersfield Town won the FA Cup?"));
if(userGuess===1){
    alert("You are correct");
}else if(userGuess<1){
    alert("Too low");
}else if(userGuess>1){
    alert("Too high");
}

userGuess=parseInt(prompt("How many times have Huddersfield Town won the FA Cup?"));
if(userGuess===1){
    alert("You are correct");
}else if(userGuess<1){
    alert("Too low");
}else if(userGuess>1){
    alert("Too high");
}

userGuess=parseInt(prompt("How many times have Huddersfield Town won the FA Cup?"));
if(userGuess===1){
	alert("You are correct");
}else if(userGuess<1){
    alert("Too low");
}else if(userGuess>1){
    alert("Too high");
}
*/


/*
5) Uncomment the following program. It is an example from the lecture slides.
a) Modify the program so that every time the user guesses, the program tells the user if their guess is too high or too low.
b) If you can get this to work it makes the game too easy. Modify the program so that a random number between 1 and 100 is generated (instead of 1 to 10).
*/

/*
const ranNum = Math.floor(Math.random()*10+1);
let correct = false;
let count = 0;
let msg;
while(correct === false)
{
    count++;
    let userGuess = parseInt(prompt("Guess the random number"));
    if(userGuess === ranNum)
    {
        correct = true;
    }
}
msg = `You guessed the random number is ${ranNum} it took you ${count}`;
if(count === 1){
    msg = msg+" guess"
}else{
    msg = msg+" guesses"
}
console.log(msg)
*/

/*
6) Write a program that asks the user for a colour and then changes the background colour of the page to the colour the user enters. The program should repeat this process until the user doesn't enter a colour i.e. the input will be equal to an empty string "". You will need to use a while loop.
*/

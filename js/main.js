// string
var hackers = 'ZeroCool';
// number
var crashed = 1507;
// boolean
var hackThePlanet = true;

// array
var helpers = ['CerealKiller', 'LordNikon', 'AcidBurn'];

// object
var joey = {
	firstTry: 'UltraLazer',
	secondTry: 'DoctorDoom',
	thirdTry: 'MasterofDisaster',
	cast: helpers
};

// console logs
console.log(hackers)
console.log(joey)
console.log(helpers)
console.log(crashed)
console.log(hackThePlanet)
console.log(joey.cast[2])

// IF STATEMENTS

// because this statement is false, console.log never runs
if (5 > 10) {
console.log('You will never see this')
}

// because this test is true, console.log will run
if (5 <= 10) {
console.log('You will definitely see this cuz it true')
}

// ELSE STATEMENT
if (5 > 20) {
		console.log('test returns false, so we are pushed to the else')
}	else {
		console.log('we ended up in our else statement')
}

// EXERCISE

/*var test = 20;
if (test > 10) {
	alert('Yo cuz, you nailed it!')
} else {
// add the var to the end	
	alert('So sorry, but you lost! The var is ' + test)
};

// string example
var dwarves = 'Sleepy';

if (dwarves === 'elves') {
	alert('Wrong fiction fella')
} else {
	alert('Snow White would be bummed you didn\'t say ' + dwarves)
}


// ELSE IF STATEMENT
if (5 > 10){
		alert('you will not end up here');
}	else if (5 < 100){
		alert('you will not end up here either')
}	else {
		alert('here we are')
}*/

// Create a named function
function addNumbers(number1, number2){
	var addedNumbers = number1 + number2;
	console.log('adding numbers: the result is ' + addedNumbers);
};

// Invoke our function
addNumbers(136, 275);

// Create a function that takes a single arguement 
function myName(fName){
	console.log('my name is ' + fName)
}

// invoke that function
myName('Sean');

// create a function stored inside of a variable
var myRealName = function(fName){
	console.log('my real name is ' + fName)
};

myRealName('Naezravax');

// EXERCISE #2
// declare a function that takes a "door" as an argument

// create a function stored in a variable
// allow it to take "door" as an argument
// based on the value of "door", do some different things

var prize = function(door){
	console.log(door)
	// if my door === 'red'
	// do something
	if (door === 'red'){
		console.log ('This door is ' + door);
	}
	// if else do this
	else if (door !== 'red'){
		console.log ('This door is ' + door);
	}
	// else
	// do something else
	else {
		console.log ('This door is ' + door);
	}	
}
prize('blue');
console.log(prize);

// create an array inside of a variable
var cartoons = ['x-men', 'spawn', 'spider-man'];
console.log(cartoons[1]);

// find the index of an item in an array
var spawnIndex = cartoons.indexOf('spawn');
console.log(spawnIndex); // logs 1 to the console


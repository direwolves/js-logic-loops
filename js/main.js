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


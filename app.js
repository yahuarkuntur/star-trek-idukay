var WarpDrive = require('./lib/warpdrive');

var args = process.argv.slice(2);

if ( args.length != 4 ) {
    console.log('Usage: node app.js damageA damageB damageC lightSpeed.');
    console.log('All arguments must be integers.');
    process.exit(1);
}

var damageA = parseInt(args[0]);
var damageB = parseInt(args[1]);
var damageC = parseInt(args[2]);
var lightSpeed = parseInt(args[3]);

console.log('Input values:');
console.log('Reactor A damage: ' + damageA);
console.log('Reactor B damage: ' + damageB);
console.log('Reactor C damage: ' + damageC);
console.log('Light speed: ' + lightSpeed);

var wd = new WarpDrive();

result = wd.calculate(lightSpeed, damageA, damageB, damageC);

console.log('Reactor A flow: ' + result.flowA + ' mg/s ');
console.log('Reactor B flow: ' + result.flowB + ' mg/s ');
console.log('Reactor C flow: ' + result.flowC + ' mg/s ');

if ( null === result.time ) {
    console.log('There is no operational time.');
}

if ( -1 == result.time ) {
    console.log('Operational time: infinite');
} else {
    console.log('Operational time: ' + result.time + ' minutes ' );
}


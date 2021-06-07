const input = require('readline-sync');

let num = input.question('Please enter a positive number:');
num = Number(num);

while (num >= 0) {
   num = input.question('Affirmative. Please enter a positive number:');
   num = Number(num); 
}


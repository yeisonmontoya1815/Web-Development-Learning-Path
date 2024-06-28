// Get a random integer from 1 to 10 inclusive
const num = Math.ceil(Math.random() * 10);
console.log(num);
let message="";

const gnum = prompt('Guess the number between 1 and 10 inclusive');
if (gnum == num) {
  message = 'Matched';
} else {
  message = 'Not matched, the number was ' + num;
}

document.getElementById('holder').innerHTML = '<h2>' + message + '</h2>';

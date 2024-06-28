
function convert() {
num1 = document.getElementById('centigrad').value;
num2 = document.getElementById('farenheit').value;
console.log(num1)
console.log(num2)

if (num1=="" && num2=="") {message = 'no input'} 
else if (num1=="") { message = fToC(num2)} 
else {message = cToF(num1)}

document.getElementById('result').innerHTML = message;
}

function cToF(celsius) {
    var cTemp = celsius;
    var cToFahr = (cTemp * 9) / 5 + 32;
    var message = cTemp + '\xB0C is ' + cToFahr + ' \xB0F.';
    console.log(message);
    console.log('ctof');

    return message;
  }
  
  function fToC(fahrenheit) {
    var fTemp = fahrenheit;
    var fToCel = ((fTemp - 32) * 5) / 9;
    var message = fTemp + '\xB0F is ' + fToCel + '\xB0C.';
    console.log(message);
    console.log('ftoc');

    return message;
  }

  function clearf() {
    element1 = document.getElementById('centigrad').value="";
    element2 = document.getElementById('farenheit').value="";
    console.log('ftoc');
  }
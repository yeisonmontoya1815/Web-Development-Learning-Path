// Get a DOM collection and convert to
// a JS array for mapping
const links = Array.from(document.querySelectorAll('nav.main a'));
// Add an event listener to each link
// To call sayHi() when clicked
links.map((link) => link.addEventListener('click', sayHi));
// Function called when link is clicked
// function sayHi(e) {
//     // console.log(e);
//     e.preventDefault();}
// alert( 'Hi!' ); }

// Adding an event listener to a link
// document.querySelector(`a.hacked`).addEventListener( `click`, sayHi )
// The Browser API will give us the Event Object
function sayHi(e) {
  e.preventDefault();
  // Logs out the Event Object
  // console.log( e );
  console.log(this);
  console.log(this.innerText);
  // This is using the Event Object
}

document.addEventListener('keypress', logKeys);
function logKeys(e) {
  key = e.which;
  console.log(key);
  console.log(String.fromCharCode(key));
}

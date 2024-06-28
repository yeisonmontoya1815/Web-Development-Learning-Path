// // // Gets the <h1>
// const section = document.querySelector( `#main` )
// // // Adds the class of main
// section.classList.toggle(`.main`)
// // // Removes the class of main
// section.classList.toggle(`.main`)

// Create a function for our title UI
function title(text) {
  return `<h1>${text}</h1>`;
}
// Select our app div
const container = document.querySelector(`.app`);
// Add title inside app
container.insertAdjacentHTML(`beforeend`, title(`Hello!`));

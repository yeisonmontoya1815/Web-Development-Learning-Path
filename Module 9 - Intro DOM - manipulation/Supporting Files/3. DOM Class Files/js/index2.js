// A string with HTML markup
// const markup = `<div class="page">Hello!</div>`
// // A string with HTML markup over multiple line
// const markup2 = `<article class="post">
// <h1>Post Title</h1>
// </article>`

// // A function that returns HTML for a post
// function post( title ) {
//     return `<article class="post">
//     <h1>${title}</h1>
//     </article>`
//     }
//     // Gives us this article HTML
//     // <article class="post"><h1>Default Title</h1>
//     // </article>
//     post( `Default Title` )

// Create a function for our title UI
function title(text) {
  return `<h1>${text}</h1>`;
}
// Select our app div
const container = document.querySelector('.app');
// Add title inside app
container.insertAdjacentHTML(`beforeend`, title(`Hello!`));

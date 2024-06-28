// 1-
// // Gets the div with id of "content"
// const content = document.querySelector(`#content`);
// // Gets <h1>Header 1</h1>
// const header = document.querySelector(`h1`);
// // Gets <strong>fill</strong>
// const bold = document.querySelector(`p strong`);
// // Gets the div with the class of "featured"
// const featured = document.querySelector(`.featured`);
// // Gets all the <p> tags and what is inside them
// const paragraphs = document.querySelectorAll(`p`);
// // Gets all the <div> tags and what is inside them
// const divs = document.querySelectorAll(`div`);


// // 2-
// // Gets <h2 class="post-title">
// // <a href="/url/here">Heading</a></h2>
// const title = document.querySelector( `.post-title` )
// // Logs "<a href="/url/here">Heading</a>"
// console.log( title.innerHTML )
// // Logs "Heading"
// console.log( title.innerText )

// // 3-
// // Gets <article id="post"></article> and contents
// const article = document.querySelector( `article` )
// // Logs the article id of "post"
// console.log( article.id )
// // Get the class attribute
// const h2 = document.querySelector( `h2` )
// // Logs "post-title"
// // Note: Use "className" not "class"!!!
// console.log( h2.className )

// // 4-
// // Get the link
// const link = document.querySelector( `.post-title a` )
// // Replace the HTML inside the link with bold markup
// link.innerHTML = '<strong>Heading-replaced</strong>'
// // Get the h2 header
// const h2 = document.querySelector( `h2` )
// // Override the class and add a new one
// // Note: Use `className` and not `class`
// h2.className = `post-title hidden`
// // Override text inside element or children
// // h2.innerText = `NEW HEADING`

// 5-
// Gets the <h2>
const header = document.querySelector( `h2` )
// Results in <h2 class="entry-header"></h2>
header.classList.add(`entry-header`)
// Removes the `entry-header` class added
// in previous example
header.classList.remove(`entry-header`)

// Gets the <h2>
// const section = document.querySelector( `section#main` )
// // Adds the class of hidden
// section.classList.toggle(`hidden`)
// // Removes the class of hidden
// section.classList.toggle(`hidden`)
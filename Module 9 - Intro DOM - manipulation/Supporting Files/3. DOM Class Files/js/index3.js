// Create functions for UI
const header = (siteName) => `<header><h1>${siteName}</h1></header>`;
const content = (page) => ` <section class="content">
                            <h2>${page.title}</h2>
                            <div>${page.content}</div>
                            </section>`;

const sidebar = (widgets) => `<aside>${widgets}</aside>`;
const footer = (siteName) => `<footer><p>Copyright ${siteName}</p></footer>`;

// Get the container div
const container = document.querySelector(`.app`);

// Setup site data
const siteName = `My Site`;
const page = { title: `Hello`, content: `<p>Lorem</p>` };
const widget = `<h3><a href="/">About Me</a></h3>`;

// Add data to the page
container.insertAdjacentHTML(`beforeend`, header(siteName));
container.insertAdjacentHTML(`beforeend`, content(page));
container.insertAdjacentHTML(`beforeend`, sidebar(widget));
container.insertAdjacentHTML(`beforeend`, footer(siteName));

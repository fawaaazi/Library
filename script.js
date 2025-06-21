const myLibrary = [];
/* ui elements for the data recieving from user */
const dialog =  document.querySelector("#dialog")
const formElement = document.querySelector("#form")

/* constructor for the book obj */
function Book(title, author, pages){
    this.id = crypto.randomUUID()
    this.title = title ;
    this.author = author;
    this.pages = pages;
}

/* eventListener for the submit of the form */
formElement.addEventListener('submit', function(event){
        event.preventDefault();
        const formElement = event.target
        const formData = new FormData(formElement);
        console.log("title"+formData.get('title'))
        const book = new Book(formData.get('title'), formData.get('author'), formData.get('pages'))
        createBookCard(book);
        myLibrary.push(book)
        dialog.close();
     })

function addBookToLibrary() {
    dialog.showModal()
    console.log(myLibrary)
}

/* DOM manipulation for the creation of the book card */
function createBookCard(book){
    const cardGrid = document.querySelector('.book-grid');
    const div = document.createElement("div")
    const title = document.createElement("p")
    const author = document.createElement("p")
    const pages = document.createElement("p")
    title.textContent = book.title
    div.appendChild(title)
    author.textContent = book.author
    div.appendChild(author)
    pages.textContent = book.pages
    div.appendChild(pages)
    div.className = "book-card"
    cardGrid.appendChild(div)

}

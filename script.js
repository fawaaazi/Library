const myLibrary = [];

function Book(title, author, pages){
    this.title = title ;
    this.author = author;
    this.pages = pages;
}

function addBookToLibrary() {
    const dialog =  document.querySelector("#dialog")
    dialog.show()
    const title = prompt("Enter the title");
    const author = prompt("Enter the author")
    const pages = prompt("Enter pages"); 
    const book = new Book(title, author, pages)
    createBookCard(book); 
}

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
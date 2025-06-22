const myLibrary = [];
/* ui elements for the data recieving from user */
const dialog =  document.querySelector("#dialog")
const formElement = document.querySelector("#form");
const removeBtn = document.querySelector("#remove-btn");
const cardGrid = document.querySelector(".book-grid")

/* constructor for the book obj */
function Book(title, author, pages, read){
    this.id = crypto.randomUUID()
    this.title = title ;
    this.author = author;
    this.pages = pages;
    this.read = read
}

/* eventListener for the submit of the form */
formElement.addEventListener('submit', function(event){
        event.preventDefault();
        const formElement = event.target
        const formData = new FormData(formElement);
        const read = document.querySelector("#read");
        console.log("title"+formData.get('title'))
        const book = new Book(formData.get('title'),
                              formData.get('author'),
                              formData.get('pages'),
                              read.checked
                            );
        createBookCard(book);
        myLibrary.push(book)
        console.log(myLibrary)
        dialog.close();
})


function addBookToLibrary() {
    dialog.showModal()
   
}

/* DOM manipulation for the creation of the book card */
function createBookCard(book){
    
    /* elements inside the card */
    const bookCard = document.createElement("div")
    const title = document.createElement("p")
    const author = document.createElement("p")
    const pages = document.createElement("p")
    const btnDiv = document.createElement("div")
    const removeBtn = document.createElement("button")
    const readBtn = document.createElement("button")
    
    /* assigning class name & id */
    btnDiv.className = "card-btn"
    readBtn.className = "read-btn"
    removeBtn.className = "remove-btn"
    readBtn.id = "btnRead"+myLibrary.length /*giving unique id for every readBtn*/
    removeBtn.id = "btnRemove"+myLibrary.length /*giving unique id for every removeBtn*/
    bookCard.className = "book-card"
    bookCard.id = book.id
   
    
    /* giving text contents */
    title.textContent = book.title
    pages.textContent = book.pages
    author.textContent = book.author
    removeBtn.textContent = "Remove"
    removeBtn.setAttribute("onclick", "removeCard(this.id)");
    readBtn.setAttribute("onclick", "readOrNot(this.id)");

    /* checking whether book readed or not */
    if(book.read){
        readBtn.textContent = "Read"
    }
    else{
        readBtn.textContent = "Not Read"
        readBtn.style.backgroundColor = "var(--light-red)"
    }  

    /* button container making */
    btnDiv.appendChild(readBtn)
    btnDiv.appendChild(removeBtn)
   
     /*appending elements */
    bookCard.appendChild(title)
    bookCard.appendChild(author)
    bookCard.appendChild(pages)
    bookCard.appendChild(btnDiv)
    cardGrid.appendChild(bookCard)

}

function removeCard(btnId){
    const btn = document.querySelector("#"+btnId)
    const bookCard = btn.parentNode.parentNode
    const bookId = bookCard.id;
    const bookIndex = myLibrary.findIndex(book => book.id === bookId);
    console.log(myLibrary[bookIndex])
   if(bookIndex !== -1){
        myLibrary.splice(bookIndex,1)
        
    }
    console.log(myLibrary)
    bookCard.remove()
}

function readOrNot(btnId){
    const btn = document.querySelector("#"+btnId)
    const bookId = btn.parentNode.parentNode.id; /* accessing the id of the book*/
    const bookIndex = myLibrary.findIndex(book => book.id === bookId)
    /*const bookIndex = bookId.slice(1); /*accessing the index value id which has "b" infront*/
    console.log(bookIndex)
    if(bookIndex !== -1){
        myLibrary[bookIndex].read = !myLibrary[bookIndex].read;
           console.log(myLibrary[bookIndex])
    }
    if(myLibrary[bookIndex].read){
        btn.textContent = "Read"
        btn.style.backgroundColor = "var(--light-green)"
    }
    else{
        btn.textContent = "Not Read"
        btn.style.backgroundColor = "var(--light-red)"
    }
}
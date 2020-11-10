let myLibrary = [];

const btn = document.querySelector('#btn');
const form = document.querySelector('#form1');
const section = document.querySelector(".book-list")

addBookToLibrary(new Book("Harry Potter", "J.K.Rowling", 652, true));
addBookToLibrary(new Book("Catcher in the Rye", "J.D. Salinger", 652, true));
addBookToLibrary(new Book("Crime and Punishment", "Fyodor Dostoevsky", 652, true));
addBookToLibrary(new Book("Cien Años de Soledad", "Gabriel Marquez", 652, true));

function Book(title, author, pages, read) {
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read
}

function addBookToLibrary(book) {
  myLibrary.push(book)
}

function removeBookFromLibrary(index) {
  myLibrary.splice(index, 1);
}

function displayLibrary() {
  for (let i = 0 ; i < myLibrary.length ; i++) {
    const bookCard = document.createElement("div")
    
    bookCard.classList.add("card", "card-body");
    bookCard.textContent = myLibrary[i]["title"] + ", by " + myLibrary[i]["author"]

    // Add JS to put a button in each card
    const deleteButton = document.createElement("button");
    deleteButton.classList.add("btn", "btn-primary");
    deleteButton.textContent = "Remove Book";

    bookCard.appendChild(deleteButton);
    section.appendChild(bookCard)
  }
}

function displayForm() {
  form.classList.toggle("d-none")
}

displayLibrary();
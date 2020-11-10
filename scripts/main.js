let myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read
}

function addBookToLibrary(book) {
  myLibrary.push(book)
}

function displayLibrary() {
  for (let i = 0 ; i < myLibrary.length ; i++) {
    const bookCard = document.createElement("div")
    bookCard.classList.add("card");

    bookCard.textContent = myLibrary[i]["title"] + ", by " + myLibrary[i]["author"]

    const section = document.querySelector(".book-list")
    section.appendChild(bookCard)

  }
}

addBookToLibrary(new Book("Harry Potter", "J.K.Rowling", 652, true));
addBookToLibrary(new Book("Catcher in the Rye", "J.D. Salinger", 652, true));
addBookToLibrary(new Book("Crime and Punishment", "Fyodor Dostoevsky", 652, true));
addBookToLibrary(new Book("Cien Años de Soledad", "Gabriel Marquez", 652, true));

displayLibrary();

const btn = document.querySelector('#btn');
const form = document.querySelector('#form1');

// btn.addEventListener('click', form.classList.toggle('btn-secondary'));
// btn.addEventListener("click", form.classList.toggle("d-none"));

function displayForm() {
  form.classList.toggle("d-none")
}
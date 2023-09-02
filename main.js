const myLibrary = ['one' , 'two', 'three'];

function Book() {
  // the constructor...
}

const books = document.querySelector('.books');

function addBookToLibrary() {
  for(let i = 0; i < myLibrary.length; i++){
    const book = document.createElement('div');
    book.textContent = myLibrary[i];
    books.appendChild(book);
  }
}

addBookToLibrary();
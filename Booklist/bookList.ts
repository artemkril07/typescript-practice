// Variables
const addBtn = document.getElementById("addBtn") as HTMLButtonElement;
const deleteBtn = document.getElementById("deleteBtn") as HTMLButtonElement;
const inputTitle = document.getElementById("title") as HTMLInputElement;
const inputAuthor = document.getElementById("author")  as HTMLInputElement;
const inputDeleteTitle = document.getElementById("title-delete")  as HTMLInputElement;
const bookList = document.getElementById("booklist") as HTMLOListElement;

// Types

interface Book {
    id: number;
    title: string;
    author: string;
}

let bookArray :Book[] = [];


// Functions

const renderBook = () => {
  bookList.innerHTML = bookArray
    .map((book) => {
      return `<li>${book.title} by ${book.author}</li>`;
    })
    .join("");
};

const addBook = () => {
  if (inputTitle.value.length > 0 && inputAuthor.value.length > 0) {
    const book = {
      id: Date.now(),
      title: inputTitle.value,
      author: inputAuthor.value,
    };
    bookArray.push(book);
    console.log(bookArray);

    renderBook();
    inputTitle.value = "";
    inputAuthor.value = "";
    return;
  } else {
    console.log("Помилка додавання");
    return;
  }
};

const deleteBook = () => {
     if (inputDeleteTitle.value.length > 0) {
         bookArray = bookArray.filter(
             (book) => inputDeleteTitle.value !== book.title       
         );
         
         renderBook();
        }else {
            console.log("You cant delete an empty string");
            return;
        }
        inputDeleteTitle.value = "";
};

addBtn.addEventListener("click", addBook);
deleteBtn.addEventListener("click", deleteBook);

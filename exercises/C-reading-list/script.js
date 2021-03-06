function readingList(books) {

let content = document.querySelector("#content");
let ulTag = document.createElement("ul");

for(let book of books){

let liTag = document.createElement("li");
let pTag = document.createElement("p");
let imgTag = document.createElement("img");

pTag.innerHTML =`${book.title} by ${book.author}`;
imgTag.src = book.image;
imgTag.setAttribute("width", "200");
imgTag.setAttribute("height", "250");

liTag.append(pTag, imgTag);

ulTag.appendChild(liTag);

book.alreadyRead ? liTag.style.backgroundColor = "green" : liTag.style.backgroundColor = "red";

} //for..of loop closing
 content.appendChild(ulTag);
} //function closing

const books = [
  {
    title: "The Design of Everyday Things",
    author: "Don Norman",
    alreadyRead: false,
    image: "https://m.media-amazon.com/images/I/51Dl6lXXesL._SL500_.jpg"
  },
  {
    title: "The Most Human Human",
    author: "Brian Christian",
    alreadyRead: true,
    image:"https://images-na.ssl-images-amazon.com/images/I/41m1rQjm5tL._SX322_BO1,204,203,200_.jpg",
  },
  {
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt",
    alreadyRead: true,
    image: "https://images-na.ssl-images-amazon.com/images/I/41as+WafrFL.jpg"
  }
];

readingList(books);

//  ## Exercise

// - Iterate through the list of books.
// - For each book, create a `<p>` element with the book title and author and append it to the page.
// - Use a `<ul>` and `<li>` to display the books.
// - Add an `<img>` to each book that links to a URL of the book cover.
// - Change the style of the book depending on whether you have read it (green) or not (red).
// - All of your HTML should go inside the `<div>` with the id **"content"**.
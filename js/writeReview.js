import { greetUser } from "./greetuser.js";
// greetUser();
import { renderTopBar } from "./renderTopBar.js";
renderTopBar();

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

const isbn = urlParams.get("isbn");
const data = localStorage.getItem("books");
const books = JSON.parse(data);
// console.log(books);

const book = books.find((book) => book.isbn == isbn);
// console.log(book);

let reviewsJSON = localStorage.getItem("reviews");
let reviews = JSON.parse(reviewsJSON);

if (!reviews) {
  reviews = [];
}

let user = localStorage.getItem("currentusername");
let userid = localStorage.getItem("currentuserid");

let form = document.querySelector(".review-form");
form.addEventListener("submit", processReview);

function processReview(e) {
  e.preventDefault();
  const reviewTitle = document.querySelector("#reviewTitle").value;
  const reviewBody = document.querySelector(".reviewBody").value;
  let newReview = { user, userid, reviewTitle, reviewBody, isbn: book.isbn };

  reviews.push(newReview);
  localStorage.setItem("reviews", JSON.stringify(reviews));

  let alert = document.querySelector(".alert");
  let output = `
        <div class="chip">
            <i class="fas fa-check"></i> Thank you for writing in! Redirecting... 
        </div>
    `;
  alert.innerHTML = output;

  setTimeout(() => {
    window.location.replace("../index.html");
  }, 1500);
}

let reviewDiv = "";
if (!user) {
  reviewDiv = `<div class='write-review'><a href="./login.html">Login to write a review</a></div>
    <hr>`;
} else {
  reviewDiv = `<div class='write-review'><a href="./writereview?isbn=${book.isbn}">Write a Review</a></div>
            <hr>`;
}

const info = document.querySelector(".book-info");

let output = `
            <img src="${book.thumbnail}" alt="" class="thumbnail">
            <div class="book-title">${book.title}</div>
            <hr>
            <div class="authors">Author: ${book.authors}</div>
            <hr>
`;

info.innerHTML = output;

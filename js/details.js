import { greetUser } from "./greetuser.js";
// greetUser();
import { renderTopBar } from "./renderTopBar.js";
renderTopBar();

import { logOut } from "./logout.js";
let logout = document.querySelector(".logout");
logout.addEventListener("click", logOut);

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

const isbn = urlParams.get("isbn");
const data = localStorage.getItem("books");
const books = JSON.parse(data);
// console.log(books);

const book = books.find((book) => book.isbn == isbn);
// console.log(book);

document.addEventListener("DOMContentLoaded", function () {
  var elems = document.querySelectorAll(".modal");
  var options = {};
  var instances = M.Modal.init(elems, options);
});

let user = localStorage.getItem("currentusername");
let reviewDiv = "";
if (!user) {
  reviewDiv = `<div class='write-review'><a class="modal-trigger" href="#modal2">Login to write a review</a></div>
    <hr>`;
} else {
  reviewDiv = `<div class='write-review'>
            <!-- Modal Trigger -->
            <a class="waves-effect waves-light btn modal-trigger" data-target="modal1">Write a Review</a></div>
            <hr>          
            `;
}

{
  /* <a href="./writeReview.html?isbn=${book.isbn}">Write a Review</a> */
}

function renderReviewForBook() {
  let reviewsJSON = localStorage.getItem("reviews");
  let reviews = JSON.parse(reviewsJSON);

  if (!reviews) {
    reviews = [];
  }

  let bookReviews = reviews.filter((book) => book.isbn == isbn);
  let bookReviewsHTML = "";
  if (bookReviews.length) {
    bookReviews.forEach((review) => {
      bookReviewsHTML += `<div class="row">
            <div class="col s12 m12">
            <div class="card grey lighten-5">
                <div class="card-content">
                <span class="card-title">${review.reviewTitle}</span>
                <p>
                    ${review.reviewBody}
                </p>
                </div>
                <div class="card-action">Review by: ${review.user}</div>
            </div>
            </div>
        </div>
        `;
    });
  } else {
    bookReviewsHTML =
      "No reviews yet for this book. Maybe write one yourself?!";
  }

  let reviewList = document.querySelector(".review-list");
  reviewList.innerHTML = bookReviewsHTML;
}

const info = document.querySelector(".book-info");

let output = `
            <img src="${book.thumbnail}" alt="" class="thumbnail">
            <div class="book-title">${book.title}</div>
            <hr>
            <div class="authors">Author: ${book.authors}</div>
            <hr>
            <div class="year">Published: ${book.publishedDate}</div>
            <hr>
            <div class="categories">Categories: ${book.categories}</div>
            <hr>
            <div class="description">${book.description}</div>
            <hr>
            <div class="publisher">Publisher: ${book.publisher}</div>
            <hr>
            <div class="pages">Pages: ${book.pageCount}</div>
            <hr>
            ${reviewDiv}
            <div class="googlebookslink"><a href="${book.infolink}">Learn more on Google Books</a>
            </div>
            <hr>
`;

info.innerHTML = output;
renderReviewForBook();

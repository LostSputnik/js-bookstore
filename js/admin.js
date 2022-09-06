import {logOut} from './logout.js';
import {fetchBookInfo} from './booksAPI.js';
import {showAPISearchResults, addBook} from './adminFunctions.js';
import {greetUser} from './greetuser.js';
import {checkLoggedIn} from './checkloggedinstatus.js';
import {checkifadmin} from './checkifadmin.js';
greetUser();

checkLoggedIn();
checkifadmin();

let logout = document.querySelector('.logout');
logout.addEventListener('click', logOut);

let search = document.querySelector('.form');
search.addEventListener('submit', searchBook);

async function searchBook(e){
    e.preventDefault();

    let input = search.querySelector('#search-bar');
    let isbn = input.value;
    console.log(isbn);
    //to-do: confirm that isbn is legal

    let book = await fetchBookInfo(isbn);

    console.log(book);
    input.value = '';

    addBook(book);
    showAPISearchResults(book);
}

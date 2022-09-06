export function showAPISearchResults(book){
    let output = 'Added the following book from Google Books API';
    output += `
        <div><img src=${book.thumbnail}>
        <div>Book Title : ${book.title}</div>
        <div>Published Date : ${book.publishedDate}</div>
    `;
    document.querySelector('.results').innerHTML = output;

}

export function addBook(book){
    let data = localStorage.getItem('books');
    let books = JSON.parse(data);

    if(!books)  books = [];

    book.id = books.length;
    books.push(book);

    let books_json = JSON.stringify(books);

    localStorage.setItem('books', books_json);
    console.log(books);
}
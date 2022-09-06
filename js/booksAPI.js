export async function fetchBookInfo(isbn){
    let url = "https://www.googleapis.com/books/v1/volumes?q=isbn:" + isbn;
    const result = await fetch(url);
    const data = await result.json();
    // console.log(data);

    const items = data.items[0];
    // console.log(items);
    const received = items['volumeInfo'];
    // console.log(received);

    // return book;
    let book = {
        title : received['title'],
        thumbnail : received['imageLinks']['thumbnail'],
        publishedDate : received['publishedDate'],
        authors : received['authors'],
        isbn : received['industryIdentifiers'][0]['identifier'],
        description : received['description'],
        categories : received['categories'],
        infolink : received['infoLink'],
        pageCount : received['pageCount'],
        publisher : received['publisher'],
        averageRating : received['averageRating'],
        ratingsCount : received['ratingsCount'],
    }
    // console.log(book);
    return book;
}
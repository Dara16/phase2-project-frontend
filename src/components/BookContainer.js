import React from "react";
import BookCard from "./BookCard"

function BookContainer({ books, onGetBook, onUpdateBook }) {
    const bookCards = books.map((book) => (
      <BookCard
        key={book.id}
        book={book}
        onGetBook={onGetBook}
        onUpdateBook={onUpdateBook}
        />
    ));

    return <div id="book-collection">{bookCards}</div>;
}

export default BookContainer;
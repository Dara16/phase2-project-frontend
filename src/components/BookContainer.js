import React from "react";
import BookCard from "./BookCard";


function BookContainer({ books, onGetBook, onUpdateBook }) {
    const bookCards = books.map((book) => (
      <BookCard
        key={book.id}
        book={book}
        onGetBook={onGetBook}
        onUpdateBook={onUpdateBook}
        />
    ));

    return (
    
    <div id="book-collection">
      <h2>Available Books</h2>
      {bookCards}</div>
    );
}

export default BookContainer;
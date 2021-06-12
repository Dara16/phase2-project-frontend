import React from "react";
import BookCard from "./BookCard";


function BookContainer({ books, onAddToCart, onUpdateBook }) {
    const bookCards = books.map((book) => (
      <BookCard
        key={book.id}
        book={book}
        onAddToCart={onAddToCart}
        onUpdateBook={onUpdateBook}
        />
    ));

    return (
    
    <div id="available-books">
      <h2 className= "text-center">Available Books</h2>
      {bookCards}</div>
    );
}

export default BookContainer;
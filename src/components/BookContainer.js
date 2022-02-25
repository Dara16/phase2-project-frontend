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
    
    <div className="block col-2">
      <h1 id="book-header">Available Books</h1>
        <div className="row">
            {bookCards}
        </div>         
    </div>
    );
}

export default BookContainer;
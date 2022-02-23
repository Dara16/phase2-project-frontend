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
      <h2 className= "book-header">Available Books</h2>
        <div className="row">
            {bookCards}
        </div>         
    </div>
    );
}

export default BookContainer;
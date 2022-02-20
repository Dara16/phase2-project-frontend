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

      <div class="container">
      <h2 className= "text-center">Available Books</h2>
        <div class="row">
            {bookCards}
        </div>         
      </div>
    </div>
    );
}

export default BookContainer;
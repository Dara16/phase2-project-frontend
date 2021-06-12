import React, { useEffect, useState } from "react";

import Header from "./Header";
import BookContainer from "./BookContainer";
import Form from "./Form";


function App() {
  const[books, setBooks] = useState([]);

  useEffect(() => {
    fetch("https://phase2-project-json-server.herokuapp.com/books")
    .then ((r) => r.json())
    .then(rBooks => setBooks(rBooks));
  })

  function handleAddBook(newBook) {
    setBooks([...books, newBook]);
  }

  function handleAddToCart(bookToDelete) {
    const updatedBooks = books.filter((book) => book.id !== bookToDelete.id);
    setBooks(updatedBooks);
  }

  function handleUpdateBook(updatedBook) {
    const updatedBooks = books.map((book) =>
    book.id === updatedBook.id ? updatedBook : book
    );
    setBooks(updatedBooks)
  }


  return (
    <>
      <Header />
      <Form onAddBook={handleAddBook} />
      <BookContainer
      books={books}
      
      onUpdateBook={handleUpdateBook}
      onAddToCart={handleAddToCart}
      />
    </>
  );

  
}

export default App;
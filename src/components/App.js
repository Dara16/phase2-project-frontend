import React, { useEffect, useState } from "react";

import Header from "./Header";
import BookContainer from "./BookContainer";
import Form from "./Form";

import '../App.css';

function App() {
  const[books, setBooks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/books")
    .then ((r) => r.json)
    .then(setBooks);
  })

  function handleAddBook(newBook) {
    setBooks([...books, newBook]);
  }

  function handleGetBook(bookToDelete) {
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
    {/*<div className="buttonContainer">
      <button onClick={handleClick}>Donate a book</button>
  </div>*/}
    <BookContainer
      books={books}
      onDeleteBook={handleGetBook}
      onUpdateBook={handleUpdateBook}
    />
    </>
  );

  
}

export default App;
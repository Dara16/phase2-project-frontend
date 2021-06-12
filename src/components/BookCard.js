import React from "react";

function BookCard({ book, onGetBook, onUpdateBook }) {
    const { id, title, author, likes } = book;

    function handleGetBookClick() {
        fetch(`https://phase2-project-json-server.herokuapp.com/books/${id}`, {
            method:"DELETE",
        })
        .then((r) => r.json())
        .then(() => {
            onGetBook(book);
        });
    }

    function handleLikeClick() {
        const updateObj = {
            likes: book.likes + 1,
        };

        fetch(`https://phase2-project-json-server.herokuapp.com/books/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(updateObj),
        })
        .then((r) => r.json())
        .then(onUpdateBook)
    }

    return (
        <div className="card">
            <h2>{title}</h2>
            <h4>{author}</h4>
            <p>{likes}</p>
            <button className="like-btn" onClick={handleLikeClick}>
                Like ♥
            </button>
            <button className="getbook-btn" onClick={handleGetBookClick}>
                Add to Cart
            </button>
        </div>
    );
}

export default BookCard;
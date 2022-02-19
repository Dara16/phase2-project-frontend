import React from "react";

function BookCard({ book, onAddToCart, onUpdateBook }) {
    const { id, title, image, author, likes } = book;

    function handleAddToCartClick() {
        fetch(`https://young-cove-58371.herokuapp.com/books/${id}`, {
            method:"DELETE",
        })
        .then((r) => r.json())
        .then(() => {
            onAddToCart(book);
        });
    }

    function handleLikeClick() {
        const updateObj = {
            likes: book.likes + 1,
        };

        fetch(`https://young-cove-58371.herokuapp.com/books/${id}`, {
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
        <div className="text-center">
            <h3>{title}</h3>
            <h4>{author}</h4>
            <img src={image} width="250" height="350" alt=""/>
            <p>{likes}</p>
            <div>
                <button className="btn btn-primary" onClick={handleLikeClick}>
                    Like ♥
                </button>
                <button className="btn btn-primary" onClick={handleAddToCartClick}>
                    Add to Cart
                </button>
            </div>
        </div>
    );
}

export default BookCard;
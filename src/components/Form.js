import React, { useState } from "react";

function Form({onAddBook}) {
    const [formData, setFormData] = useState({
        title: "",
        author: "",
        image: "",
    });

    function handleChange(event) {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        });
    }

    function handleSubmit(event) {
        event.preventDefault();

        const newBook = {
            ...formData,
            likes: 0,
        };

        fetch("https://young-cove-58371.herokuapp.com/books", {
            method: "POST",
            headers: {
                "Content-Type":"application/json",
            },
            body: JSON.stringify(newBook),
        })
        .then((r) => r.json())
        .then(onAddBook);
    }

    return (
        <div className="block col-1">
        <form onSubmit={handleSubmit} className="book-form">
            <h3>Donate a book</h3>
            <input
            type="text"
            name="title"
            onChange={handleChange}
            value={formData.title}
            placeholder="Enter a book title..."
            className="input-text"
            />
            <br />
            <input
            type="text"
            name="author"
            onChange={handleChange}
            value={formData.author}
            placeholder="Enter author's name..."
            className="input-text"
            />
            <br />
            <input
            type="text"
            name="image"
            onChange={handleChange}
            value={formData.image}
            placeholder="Enter image URL..."
            className="input-text"
            />
            <br />
            <input
            type="submit"
            name="submit"
            value="Donate"
            className="submit"
            />
        </form>
    </div>
  );
    
}

export default Form;
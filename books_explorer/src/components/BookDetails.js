import React from "react";
import { useParams, Link } from "react-router-dom";
import books from "../data/books";

function BookDetail() {
  const { id } = useParams();

  // find the selected book
  const book = books.find((b) => b.id === parseInt(id));

  if (!book) {
    return <h2>Book not found</h2>;
  }

  return (
    <div className="container">
      <h2>{book.title}</h2>

      <img src={book.imageUrl} alt={book.title} className="image" />

      <p><strong>Author:</strong> {book.author}</p>
      <p>{book.description}</p>

      <Link to="/">
        <button className="btn">Back</button>
      </Link>
    </div>
  );
}

export default BookDetail;
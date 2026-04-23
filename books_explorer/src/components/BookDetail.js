import React from "react";
import { useParams, Link } from "react-router-dom";
import books from "../data/books";

function BookDetail() {
  const { id } = useParams();
  const book = books.find((b) => b.id === parseInt(id));

  if (!book) {
    return <h2 style={{ textAlign: "center" }}>Book not found</h2>;
  }

  return (
    <div className="container detail">
      
      <img src={book.imageUrl} alt={book.title} />

      <h2>{book.title}</h2>
      <h4>{book.author}</h4>

      <p>{book.description}</p>

      <Link to="/">
        <button className="btn">⬅ Back</button>
      </Link>

    </div>
  );
}

export default BookDetail;
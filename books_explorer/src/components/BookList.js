import React from "react";
import { Link } from "react-router-dom";
import books from "../data/books";

function BookList() {
  return (
    <div className="container">
      <div className="grid">
        {books.map((book) => (
          <div key={book.id} className="card">
            
            <img src={book.imageUrl} alt={book.title} className="image" />
            
            <h3>{book.title}</h3>
            <p>{book.author}</p>

            <Link to={`/books/${book.id}`}>
              <button className="btn">Read More</button>
            </Link>

          </div>
        ))}
      </div>
    </div>
  );
}

export default BookList;
import React from "react";
import { Link } from "react-router-dom";
import books from "../data/books";

function BookList() {
  return (
    <div className="container">
      <h2>Book List</h2>

      {books.map((book) => (
        <div key={book.id} className="card">
          <h3>{book.title}</h3>
          <p>by {book.author}</p>

          {/* Read More Button */}
          <Link to={`/books/${book.id}`}>
            <button className="btn">Read More</button>
          </Link>
        </div>
      ))}
      
    </div>
  );
}

export default BookList;
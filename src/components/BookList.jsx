import React from 'react';
import BookItem from './BookItem';

const BookList = ({ books, onBookChange }) => {
  if (!books.length) return <p>No books found.</p>;
  return (
    <table className="book-table">
      <thead>
        <tr>
          <th>Title</th>
          <th>Author</th>
          <th>Status</th>
          <th>Note</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {books.map((book) => (
          <BookItem key={book.id} book={book} onBookChange={onBookChange} />
        ))}
      </tbody>
    </table>
  );
};

export default BookList;

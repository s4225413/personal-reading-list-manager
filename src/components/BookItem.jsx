import React from 'react';
import { deleteBook, updateBookStatus } from '../services/bookService';

const BookItem = ({ book, onBookChange }) => {
  const handleDelete = async () => {
    await deleteBook(book.id);
    onBookChange();
  };

  const handleStatusChange = async (e) => {
    await updateBookStatus(book.id, e.target.value);
    onBookChange();
  };

  return (
    <tr>
      <td>{book.title}</td>
      <td>{book.author}</td>
      <td>
        <select value={book.status} onChange={handleStatusChange}>
          <option>To Read</option>
          <option>Reading</option>
          <option>Completed</option>
        </select>
      </td>
      <td>{book.note}</td>
      <td><button onClick={handleDelete} className="delete-btn">Delete</button></td>
    </tr>
  );
};

export default BookItem;

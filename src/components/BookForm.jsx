import React, { useState } from 'react';
import { addBook } from '../services/bookService';

const BookForm = ({ onBookChange }) => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [status, setStatus] = useState('To Read');
  const [note, setNote] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addBook({ title, author, status, note });

      // ✅ Reset form
      setTitle('');
      setAuthor('');
      setStatus('To Read');
      setNote('');

      // ✅ Show success message
      alert('✅ Book added successfully!');

      if (onBookChange) onBookChange();
    } catch (err) {
      alert('❌ Failed to add book');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="book-form">
      <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Book Title" required />
      <input value={author} onChange={(e) => setAuthor(e.target.value)} placeholder="Author" required />
      <select value={status} onChange={(e) => setStatus(e.target.value)}>
        <option>To Read</option>
        <option>Reading</option>
        <option>Completed</option>
      </select>
      <textarea value={note} onChange={(e) => setNote(e.target.value)} placeholder="Note (optional)" />
      <button type="submit">Add Book</button>
    </form>
  );
};

export default BookForm;

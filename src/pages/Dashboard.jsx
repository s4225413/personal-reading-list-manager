import React, { useEffect, useState } from 'react';
import { fetchBooks } from '../services/bookService';

const Dashboard = () => {
  const [summary, setSummary] = useState({ toRead: 0, reading: 0, completed: 0 });

  const calculateSummary = (books) => {
    const toRead = books.filter((b) => b.status === 'To Read').length;
    const reading = books.filter((b) => b.status === 'Reading').length;
    const completed = books.filter((b) => b.status === 'Completed').length;
    setSummary({ toRead, reading, completed });
  };

  useEffect(() => {
    const loadBooks = async () => {
      const books = await fetchBooks();
      calculateSummary(books);
    };
    loadBooks();
  }, []);

  return (
    <div>
      <h2>Reading Summary</h2>
      <div className="dashboard-grid">
        <div className="card to-read">To Read: {summary.toRead}</div>
        <div className="card reading">Reading: {summary.reading}</div>
        <div className="card completed">Completed: {summary.completed}</div>
      </div>
    </div>
  );
};

export default Dashboard;
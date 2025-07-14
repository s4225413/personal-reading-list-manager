import React, { useEffect, useState } from 'react';
import BookList from '../components/BookList';
import FilterBar from '../components/FilterBar';
import { fetchBooks } from '../services/bookService';

const Home = () => {
  const [books, setBooks] = useState([]);
  const [filter, setFilter] = useState('');

  const loadBooks = async () => {
    const data = await fetchBooks(filter);
    setBooks(data);
  };

  useEffect(() => {
    loadBooks();
  }, [filter]);

  return (
    <div>
      <h2>Your Book List</h2>
      <FilterBar onFilterChange={setFilter} />
      <BookList books={books} onBookChange={loadBooks} />
    </div>
  );
};

export default Home;
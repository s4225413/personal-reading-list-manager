import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import AddBook from './pages/AddBook';
import Dashboard from './pages/Dashboard';
import Auth from './components/Auth';
import './styles/main.css';

const App = () => {
  return (
    <Router>
      <Navbar />

      <div className="main-container">
        {/* TEMP CHECK: Uncomment below to test if App renders */}
        {/* <h1>📘 Personal Reading List Manager</h1> */}

        <Routes>
          {/* Home Page — your main book list view */}
          <Route path="/" element={<Home />} />

          {/* Add Book Page — form to add a new book */}
          <Route path="/add-book" element={<AddBook />} />

          {/* Dashboard — summary view (To Read, Reading, Completed) */}
          <Route path="/dashboard" element={<Dashboard />} />

          {/* Auth — Login/Register page */}
          <Route path="/auth" element={<Auth />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

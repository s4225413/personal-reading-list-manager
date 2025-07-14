import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1 className="navbar-title">📘 ReadTrack</h1>
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/add-book">Add Book</Link></li>
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/auth">Login</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;

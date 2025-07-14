import React from 'react';

const FilterBar = ({ onFilterChange }) => {
  return (
    <input
      type="text"
      className="filter-input"
      placeholder="Search by title or author..."
      onChange={(e) => onFilterChange(e.target.value)}
    />
  );
};

export default FilterBar;
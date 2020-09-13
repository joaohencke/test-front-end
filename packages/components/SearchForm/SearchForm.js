import React from 'react';
import propTypes from 'prop-types';

export default function SearchForm({ onSubmit }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(e.target.search.value);
  };

  return (
    <form onSubmit={handleSubmit} className="mb-2">
      <div className="input-group">
        <input type="search" className="form-control" name="search" />
        <div className="input-group-append">
          <button type="submit" className="btn btn-primary">
            buscar
          </button>
        </div>
      </div>
    </form>
  );
}

SearchForm.propTypes = {
  onSubmit: propTypes.func.isRequired,
};

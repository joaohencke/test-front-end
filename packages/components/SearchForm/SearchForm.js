import React from 'react';
import propTypes from 'prop-types';
import { useDebounce } from '@seven/hooks';

export default function SearchForm({ onSubmit, onChange }) {
  const debounce = useDebounce();
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(e.target.search.value);
  };

  const handleChange = (e) => {
    // eslint-disable-next-line
    const value = e.target.value;
    if (onChange) debounce(() => onChange(value));
  };

  return (
    <form onSubmit={handleSubmit} className="mb-2">
      <div className="input-group">
        <input type="search" className="form-control" name="search" onChange={handleChange} />
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
  onChange: propTypes.func,
};

SearchForm.defaultProps = {
  onChange: null,
};

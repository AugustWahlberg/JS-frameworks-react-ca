import React, { useState } from 'react';
import * as S from './SearchBar.styles';

export function SearchBar({ handleSearch }) {
  const [query, setQuery] = useState('');

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleSearch(query);
  };

  return (
    <S.SearchElement onSubmit={handleSubmit}>
      <input type="text" value={query} onChange={handleChange} placeholder="Search..." />
      <button type="submit">Search</button>
    </S.SearchElement>
  );
}
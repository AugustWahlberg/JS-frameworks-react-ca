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
      <S.SearchInput type="text" value={query} onChange={handleChange} placeholder="Search..." />
      <S.SearchButton type="submit">Search</S.SearchButton>
    </S.SearchElement>
  );
}
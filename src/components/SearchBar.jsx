import React, { useState } from "react";
import * as S from "./SearchBar.styles";

export function SearchBar({ onSearchTermChange }) {
  const [query, setQuery] = useState("");

  const handleChange = (event) => {
    const newQuery = event.target.value;
    setQuery(newQuery);
    onSearchTermChange(newQuery);
  };

  return (
    <S.SearchElement>
      <S.SearchInput
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="Search..."
      />
    </S.SearchElement>
  );
}

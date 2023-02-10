import React, { useState } from "react";
import "./style.css";
const SearchForm = ({ submit }) => {
  const [searchStr, setSearchStr] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!searchStr) return;
    submit(searchStr);
    setSearchStr("");
  };
  return (
    <form role="form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search your cocktail here"
        value={searchStr}
        onChange={(e) => setSearchStr(e.target.value)}
      />
      <button role="button" type="submit">
        Search
      </button>
    </form>
  );
};

export default SearchForm;

import React, { memo } from "react";
import { useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { updateSearch } from "./redux/store";

const SearchInput = memo(() => {
  const dispatch = useDispatch();

  const handleChange = (event) => {
    dispatch(updateSearch(event.target.value));
  };

  return (
    <div className="search-input-container">
      <FontAwesomeIcon icon={faSearch} className="search-icon" />
      <input type="search" className="search-text" onChange={handleChange} />
    </div>
  );
});

export default SearchInput;

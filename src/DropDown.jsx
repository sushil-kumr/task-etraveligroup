import React, { memo } from "react";
import { useDispatch } from "react-redux";
import { updateSortByData } from "./redux/store";

const DropDown = memo(() => {
  const dispatch = useDispatch();
  const dropdownOptions = [
    { value: "", label: "Select the Sort" },
    { value: "episode", label: "Sort by Episode" },
    { value: "title", label: "Sort by Title" },
    { value: "date", label: "Sort by Date" },
  ];

  const handleChange = (event) => {
    dispatch(updateSortByData(event.target.value));
  };

  return (
    <select className="custom-select" onChange={handleChange}>
      {dropdownOptions.map((option, index) => (
        <option key={index} value={option.value} className="select-option">
          {option.label}
        </option>
      ))}
    </select>
  );
});

export default DropDown;

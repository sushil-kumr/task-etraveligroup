import React, { memo } from "react";
import { convertToRoman } from "./utils";

const TableRow = memo(({ id, title, date, selectedOnClick }) => {
  const getFormateTitle = (id, title) => {
    return `Episode ${convertToRoman(id)} - ${title}`;
  };

  return (
    <tr onClick={() => selectedOnClick(id)}>
      <td>{`Episode ${id}`}</td>
      <td>{getFormateTitle(id, title)}</td>
      <td>{date}</td>
    </tr>
  );
});

export default TableRow;

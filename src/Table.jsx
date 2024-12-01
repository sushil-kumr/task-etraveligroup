import React, { memo, useCallback } from "react";
import { useDispatch } from "react-redux";
import { updateEpisode } from "./redux/store";
import TableRow from "./TableRow";

const Table = memo(({ data }) => {
  const dispatch = useDispatch();

  const selectedOnClick = useCallback(
    (id) => {
      dispatch(updateEpisode(id));
    },
    [dispatch]
  );
  return (
    <div className="table-container">
      <table className="custom-table">
        <colgroup>
          <col style={{ width: "25%" }} />
          <col style={{ width: "50%" }} />
          <col style={{ width: "25%" }} />
        </colgroup>
        <tbody>
          {data.map(({ episode_id, title, release_date }) => (
            <TableRow
              key={episode_id}
              id={episode_id}
              title={title}
              date={release_date}
              selectedOnClick={selectedOnClick}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
});

export default Table;

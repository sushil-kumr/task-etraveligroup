import "./App.css";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllData } from "./redux/store";
import Table from "./Table";
import DropDown from "./DropDown";
import Description from "./Description";
import SearchInput from "./SearchInput";

function App() {
  const dispatch = useDispatch();
  const { data, error } = useSelector((state) => state.data);

  const { selectedEpisode } = useSelector((state) => state.data);
  useEffect(() => {
    dispatch(fetchAllData());
  }, []);

  if (data) {
    return (
      <div className="content">
        <div className="search-container">
          <DropDown />
          <SearchInput />
        </div>
        <div className="main-content">
          <Table data={data} />
          {selectedEpisode && (
            <>
              <hr />
              <Description />
            </>
          )}
        </div>
      </div>
    );
  } else if (error) {
    console.log("unable to fetch data", error);

    return (
      <div className="container">
        <strong className="error">
          Something went wrong, please try again later!
        </strong>
        <h5>{error}</h5>
      </div>
    );
  } else
    return (
      <div className="container">
        <div className="spinner" />
        <strong>Loading...</strong>
      </div>
    );
}

export default App;

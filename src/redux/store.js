import { configureStore, createSlice } from "@reduxjs/toolkit";

const dataSlice = createSlice({
  name: "data",
  initialState: {
    data: null,
    loading: false,
    error: null,
    selectedEpisode: null,
    sortby: "",
    tempData: null,
  },
  reducers: {
    fetchDataStart(state) {
      state.loading = true;
      state.error = null;
    },
    fetchDataSuccess(state, action) {
      state.data = action.payload;
      state.tempData = action.payload;
      state.loading = false;
    },
    fetchDataError(state, action) {
      state.error = action.payload;
      state.loading = false;
    },
    updateSelectedEpisode(state, action) {
      state.selectedEpisode = action.payload;
    },
    updateSort(state, action) {
      state.sortby = action.payload;
    },
    updateAllData(state, action) {
      state.data = action.payload;
    },
  },
});

const store = configureStore({
  reducer: { data: dataSlice.reducer },
});

const {
  fetchDataStart,
  fetchDataSuccess,
  fetchDataError,
  updateAllData,
  updateSelectedEpisode,
  updateSort,
} = dataSlice.actions;

export const fetchAllData = () => async (dispatch) => {
  try {
    dispatch(fetchDataStart());
    const response = await fetch("https://swapi.dev/api/films/?format=json");
    const data = await response.json();
    dispatch(fetchDataSuccess(data?.results));
  } catch (error) {
    dispatch(fetchDataError(error.message));
  }
};

export const updateEpisode = (id) => async (dispatch) => {
  dispatch(updateSelectedEpisode(id));
};

export const updateSortByData = (data) => async (dispatch, getState) => {
  const allData = [...getState().data.tempData];
  if (data === "episode") allData.sort((a, b) => a.episode_id - b.episode_id);
  else if (data === "title")
    allData.sort((a, b) => a.title.localeCompare(b.title));
  else if (data === "date")
    allData.sort((a, b) => new Date(a.release_date) - new Date(b.release_date));

  dispatch(fetchDataSuccess([...allData]));
  dispatch(updateSort(data));
};

export const updateSearch = (text) => async (dispatch, getState) => {
  const allData = [...getState().data.tempData];

  if (text === "") {
    dispatch(updateAllData([...allData]));
  } else {
    const filterData = allData.filter((item) =>
      item.title.toLowerCase().includes(text.toLowerCase())
    );

    dispatch(updateAllData([...filterData]));
  }
};

export default store;

import { GET_SERIES_LIST } from "./SeriesListActionTypes";

const list = {
  seriesList: [],
};
export const seriesListInfo = (state = list, action) => {
  switch (action.typs) {
    case GET_SERIES_LIST:
      return { ...state, seriesList: action.seriesList };
    default:
      return state;
  }
};

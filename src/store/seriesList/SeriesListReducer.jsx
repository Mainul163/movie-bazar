import { GET_SERIES_LIST } from "./SeriesListActionTypes";

const list = {
  seriesListData: [],
};
export const seriesListInfo = (state = list, action) => {
  switch (action.type) {
    case GET_SERIES_LIST:
      return { ...state, seriesListData: action.seriesList };
    default:
      return state;
  }
};

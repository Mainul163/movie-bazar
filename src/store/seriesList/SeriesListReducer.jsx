import {
  GET_FRIENDS_SERIES_LIST,
  GET_SERIES_LIST,
  GET_SHOW_DETAILS,
} from "./SeriesListActionTypes";

const list = {
  seriesListData: [],
  friendsSeries: [],
  details: [],
};
export const seriesListInfo = (state = list, action) => {
  switch (action.type) {
    case GET_SERIES_LIST:
      return { ...state, seriesListData: action.seriesList };
    case GET_FRIENDS_SERIES_LIST:
      return { ...state, friendsSeries: action.friendsSeriesList };
    case GET_SHOW_DETAILS:
      return { ...state, details: action.details };
    default:
      return state;
  }
};

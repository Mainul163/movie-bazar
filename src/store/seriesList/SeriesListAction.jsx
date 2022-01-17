import { APIkey } from "../../Api/ApiKey";
import axios from "../../baseUrl/basrUrl";
import {
  GET_SERIES_LIST,
  GET_FRIENDS_SERIES_LIST,
  GET_SHOW_DETAILS,
} from "./SeriesListActionTypes";

//************* get data from api ***************** */
export const getAllSeriesInfo = async () => {
  const movie = "Harry";
  const seriesList = await axios
    .get(`/?apikey=${APIkey}&s=${movie}&type=movie`)
    .then((res) => res.data)
    .catch((error) => console.log(error));

  return {
    type: GET_SERIES_LIST,
    seriesList: seriesList,
  };
};

//************* end ***************** */

//************* get friendsSeries data from api ***************** */
export const getFriendsSeries = async () => {
  const series = "Friends";
  const friendsSeriesList = await axios
    .get(`/?apikey=${APIkey}&s=${series}&type=series`)
    .then((res) => res.data)
    .catch((error) => console.log(error));
  return {
    type: GET_FRIENDS_SERIES_LIST,
    friendsSeriesList: friendsSeriesList,
  };
};
//************* end ***************** */

//************* get details data from api ***************** */

export const movieDetails = async (id) => {
  const details = await axios
    .get(`?apikey=${APIkey}&i=${id}&Plot=full`)
    .then((res) => res.data)
    .catch((error) => console.log(error));

  console.log(details);
  return {
    type: GET_SHOW_DETAILS,
    details: details,
  };
};

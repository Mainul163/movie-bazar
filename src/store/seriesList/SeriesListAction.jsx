import { APIkey } from "../../Api/ApiKey";
import axios from "../../baseUrl/basrUrl";
import { GET_SERIES_LIST } from "./SeriesListActionTypes";

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

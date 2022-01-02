import axios from "axios";

const customAxios = axios.create({ baseURL: "http://www.omdbapi.com" });

export default customAxios;

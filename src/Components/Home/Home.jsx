import React, { useEffect } from "react";
import MoveListing from "../MoveListing/MoveListing";
import { APIkey } from "../../Api/ApiKey";
import { useDispatch, useSelector } from "react-redux";
import { getAllSeriesInfo } from "../../store/seriesList/SeriesListAction";

const Home = () => {
  const movie = "Harry";
  // useEffect(() => {
  //   fetch(`http://www.omdbapi.com/?apikey=${APIkey}&s=${movie}&type=movie`)
  //     .then((res) => res.json())
  //     .then((data) => console.log(data));
  // }, []);
  const dispatch = useDispatch();
  const state = useSelector((state) => console.log(state));
  const seriesdataList = async () => {
    dispatch(await getAllSeriesInfo());
  };
  useEffect(() => {
    seriesdataList();
  }, []);
  return (
    <div>
      <div className="banner-img"></div>;
      <MoveListing />
    </div>
  );
};

export default Home;

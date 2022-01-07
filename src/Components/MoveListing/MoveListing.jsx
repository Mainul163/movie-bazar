import React, { useEffect } from "react";
import { Result } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { getAllSeriesInfo } from "../../store/seriesList/SeriesListAction";
import MovieCard from "./../MovieCard/MovieCard";

const MoveListing = () => {
  const dispatch = useDispatch();
  const movieList = useSelector((state) => state);
  const seriesdataList = async () => {
    dispatch(await getAllSeriesInfo());
  };
  useEffect(() => {
    seriesdataList();
  }, []);
  console.log(movieList.seriesList.seriesListData);
  return (
    <>
      <MovieCard />
    </>
  );
};

export default MoveListing;

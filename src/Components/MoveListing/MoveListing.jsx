import { Result } from "antd";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllSeriesInfo } from "../../store/seriesList/SeriesListAction";
import MovieCard from "./../MovieCard/MovieCard";
import "antd/dist/antd.css";

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
      {movieList.seriesList.seriesListData.Response === "True" ? (
        <MovieCard />
      ) : (
        <Result
          status="warning"
          title="There are some problems with your operation."
        />
      )}
    </>
  );
};

export default MoveListing;

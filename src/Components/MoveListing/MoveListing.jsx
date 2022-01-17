import React, { useEffect } from "react";
import { Row, Col } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { getAllSeriesInfo } from "../../store/seriesList/SeriesListAction";
import MovieCard from "./../MovieCard/MovieCard";
import "./MoveListing.scss";

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
  let renderMovies = "";
  renderMovies =
    movieList.seriesList.seriesListData.Response === "True" ? (
      movieList.seriesList.seriesListData.Search.map((data, index) => (
        <MovieCard key={index} movie={data} />
      ))
    ) : (
      <div className="movies-error">
        <h1>{movieList.seriesList.seriesListData.Error}</h1>
      </div>
    );
  return (
    <>
      <div className="movie-wrapper">
        <div className="movie-list">
          <h2>Movies</h2>
        </div>
        <div className="movie-container">{renderMovies}</div>
      </div>
    </>
  );
};

export default MoveListing;

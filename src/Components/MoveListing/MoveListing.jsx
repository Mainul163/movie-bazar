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
      <Row>
        {movieList.seriesList.seriesListData.Search.map((data, index) => (
          <MovieCard movie={data} key={index + 1} />
        ))}
      </Row>
    ) : (
      // movieList.seriesList.seriesListData.Search.map((data, index) => (
      //   <Row justify="space-between">
      //     <Col xxl={5} xl={5}>
      //       <MovieCard movie={data} key={index + 1} />
      //     </Col>
      //   </Row>
      // ))
      <div className="movies-erros">
        <h1>{movieList.seriesList.seriesListData.Error}</h1>
      </div>
    );
  return (
    <>
      <Row justify="end">
        <Col xxl={12} xl={12} md={4} lg={4} style={{ border: "1px solid red" }}>
          <p>Movies</p>
        </Col>
        <Col xxl={12} xl={12} md={2} style={{ border: "1px solid red" }}>
          <p>Movies</p>
        </Col>
        <Col xxl={6} xl={6} md={2} style={{ border: "1px solid red" }}>
          <h2>Movies</h2>
        </Col>
        <Col xxl={6} xl={6} md={2} style={{ border: "1px solid red" }}>
          <h2>Movies</h2>
        </Col>
      </Row>
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

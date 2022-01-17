import React, { useEffect } from "react";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { movieDetails } from "./../../store/seriesList/SeriesListAction";
const MovieDetail = () => {
  const { movieId } = useParams();

  const dispatch = useDispatch();
  const movieInfo = useSelector((state) => state);
  const showDetails = async (id) => {
    dispatch(await movieDetails(id));
  };
  useEffect(() => {
    showDetails(movieId);
  }, [movieId]);
  console.log(movieInfo);
  return <div>movie detail</div>;
};

export default MovieDetail;

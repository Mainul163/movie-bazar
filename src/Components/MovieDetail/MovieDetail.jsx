import React, { useEffect } from "react";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { movieDetails } from "./../../store/seriesList/SeriesListAction";
import "./MovieDetail.scss";

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
  console.log(movieInfo.seriesList.details);
  return (
    <div className="movie-section">
      {Object.keys(movieInfo.seriesList.details).length === 0 ? (
        <div>...Loading</div>
      ) : (
        <>
          <div className="section-left">
            <div className="movie-title">
              {movieInfo.seriesList.details.Title}
            </div>
            <div className="movie-rating">
              <span>
                IMDB Rating <i className="fa fa-star"></i> :{" "}
                {movieInfo.seriesList.details.imdbRating}
              </span>
              <span>
                IMDB Votes <i className="fa fa-thumbs-up"></i> :{" "}
                {movieInfo.seriesList.details.imdbVotes}
              </span>
              <span>
                Runtime <i className="fa fa-film"></i> :{" "}
                {movieInfo.seriesList.details.Runtime}
              </span>
              <span>
                Year <i className="fa fa-calendar"></i> :{" "}
                {movieInfo.seriesList.details.Year}
              </span>
            </div>
            <div className="movie-plot">
              {movieInfo.seriesList.details.Plot}
            </div>
            <div className="movie-info">
              <div>
                <span>Director</span>
                <span>{movieInfo.seriesList.details.Director}</span>
              </div>
              <div>
                <span>Stars</span>
                <span>{movieInfo.seriesList.details.Actors}</span>
              </div>
              <div>
                <span>Generes</span>
                <span>{movieInfo.seriesList.details.Genre}</span>
              </div>
              <div>
                <span>Languages</span>
                <span>{movieInfo.seriesList.details.Language}</span>
              </div>
              <div>
                <span>Awards</span>
                <span>{movieInfo.seriesList.details.Awards}</span>
              </div>
            </div>
          </div>
          <div className="section-right">
            <img
              src={movieInfo.seriesList.details.Poster}
              alt={movieInfo.seriesList.details.Title}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default MovieDetail;

import React from "react";
import { Card, Col } from "antd";
const { Meta } = Card;
const MovieCard = ({ movie }) => {
  console.log(movie);
  return (
    <Col xxl={6} xl={6} md={2}>
      <Card hoverable cover={<img alt="example" src={movie.Poster} />}>
        {" "}
        <Meta title="Europe Street beat" description="www.instagram.com" />
      </Card>
    </Col>
  );
};

export default MovieCard;

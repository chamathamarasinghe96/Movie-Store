import React, { useState, useEffect } from "react";
import { useGlobalContext, API_ENDPOINT } from "./context";
import { useParams, Link } from "react-router-dom";

const SingleMovie = () => {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState({ show: false, msg: "" });
  const [movie, setMovie] = useState({});

  const fetchMovie = async (url) => {
    const resp = await fetch(url);
    const data = await resp.json();
    if (data.Response === "True") {
      setMovie(data);
      setIsLoading(false);
    } else {
      setError({ show: true, msg: data.Error });
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchMovie(`${API_ENDPOINT}&i=${id}`);
  }, [id]);

  if (isLoading) {
    return <div className="loading"></div>;
  }
  if (error.show) {
    return (
      <div className="page-error">
        <h1>{error.msg}</h1>
        <Link to="/" className="btn">
          back to movies
        </Link>
      </div>
    );
  }

  const { Poster: poster, Title: title, Year: year, Plot: plot } = movie;

  return (
    <section className="single-movie">
      <img src={poster} alt={title} />
      <div className="single-movie-info">
        <h2>{title}</h2>
        <p>{plot}</p>
        <h4>{year}</h4>
        <Link to="/" className="btn">
          back to movies
        </Link>
      </div>
    </section>
  );
};

export default SingleMovie;

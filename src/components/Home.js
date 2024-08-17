
import { useDispatch, useSelector } from "react-redux";
import { handleFavorite, removeFavorite } from "../redux/action";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaStar } from 'react-icons/fa';
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function Home() {
  const [movies, setMovies] = useState([]);
  const favorites = useSelector((state) => state.favoriteMovies);
  const dispatch = useDispatch();
//   const movie = useSelector((state) => state.movies);

// useEffect(() => {
//   dispatch(fetchMovies(language));
 
// }, [dispatch, language]);

 

  const handleStarClick = (movie) => {
    if (favorites.some((fav) => fav.id === movie.id)) {
      dispatch(removeFavorite(movie.id));
    } else {
      dispatch(handleFavorite(movie));
    }
  };

  useEffect(() => {
    axios
      .get("https://api.themoviedb.org/3/movie/popular", {
        params: {
          api_key: "aa6fc65fcedb7431af3ac2fbe6484cd0",
        },
      })
      .then((response) => setMovies(response.data.results))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="container">
      <h1 className="text-3xl font-bold mb-4">Home Page</h1>
      <div className="row">
        {movies.map((movie) => (
          <div className="col-md-4 mb-4" key={movie.id}>
            <Card style={{ width: "100%", height: "100%" }}>
              <Card.Img
                variant="top"
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              />
              <Card.Body
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  height: "100%",
                }}
              >
                <Card.Title>
                  {movie.title}
                  <FaStar
                    className="ml-2 "
                    color={
                      favorites.some((fav) => fav.id === movie.id)
                        ? "yellow"
                        : "grey"
                    }
                    onClick={() => handleStarClick(movie)}
                    style={{ cursor: "pointer" }}
                  />
                </Card.Title>
                <Card.Text style={{ flexGrow: 1 }}>{movie.overview}</Card.Text>
                <Link to={`/details/${movie.id}`}>
                  <Button className="w-100 btn btn-success">
                    View Details
                  </Button>
                </Link>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;


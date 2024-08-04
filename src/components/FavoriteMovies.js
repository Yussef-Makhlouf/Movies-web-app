import React from 'react';
import { useSelector } from 'react-redux';
import { Card, Container, Row, Col, Button } from 'react-bootstrap';

import { removeFavorite } from '../redux/action';
const FavoriteMovies = () => {
  const favorites = useSelector(state => state.favoriteMovies);

  return (
    <Container>
      <Row>
        {favorites.map((movie, index) => (
          <Col key={`${movie.id}-${index}`} md={4} sm={6} className="mb-4">
            <Card>
              <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
              <Card.Body>
                <Card.Title>{movie.title}</Card.Title>
                <Card.Text>{movie.release_date}</Card.Text>
                <Card.Text>{movie.overview}</Card.Text>
                <Button onClick={() => removeFavorite(movie)} variant="danger">remove</Button>

              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

    </Container>
  );
};

export default FavoriteMovies;

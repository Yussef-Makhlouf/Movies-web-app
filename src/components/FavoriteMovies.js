import React from 'react';
import { useSelector } from 'react-redux';
import { Card, Container, Row, Col, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { removeFavorite } from '../redux/action';
const FavoriteMovies = () => {
  const favorites = useSelector(state => state.favoriteMovies);
  const dispatch = useDispatch();

  return (
    <Container>
      <Row className='justify-content-md-center mt-4'>
        {favorites.map((movie, index) => (
          <Col key={`${movie.id}-${index}`} md={4} sm={6} className="mb-4">
            <Card>
              <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}  />
              <Card.Body>
                <Card.Title>{movie.title}</Card.Title>
                <Card.Text>{movie.release_date}</Card.Text>
                <Card.Text>{movie.overview}</Card.Text>
                <Button onClick={() => dispatch(removeFavorite(movie.id))} variant="danger">remove</Button>

              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

    </Container>
  );
};

export default FavoriteMovies;

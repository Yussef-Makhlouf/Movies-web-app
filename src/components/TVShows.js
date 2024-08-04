// import React from 'react';

// function TVShows() {
//   return (
//     <div className="container px-4 md:px-6 py-12">
//       <h1 className="text-3xl font-bold">TV Shows</h1>
//       <p className="mt-4">Explore TV shows here.</p>
//     </div>
//   );
// }

// export default TVShows;
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, Button, Pagination, Form, InputGroup } from 'react-bootstrap';

const TVShows = () => {
  const [tvShows, setTVShows] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    fetchTVShows();
  }, [page, searchTerm]);

  const fetchTVShows = () => {
    const endpoint = searchTerm 
      ? `https://api.themoviedb.org/3/search/tv?query=${searchTerm}&page=${page}&api_key=aa6fc65fcedb7431af3ac2fbe6484cd0` 
      : `https://api.themoviedb.org/3/tv/popular?page=${page}&api_key=aa6fc65fcedb7431af3ac2fbe6484cd0`;
    
    axios.get(endpoint)
      .then(response => {
        setTVShows(response.data.results);
        setTotalPages(response.data.total_pages);
      })
      .catch(error => console.error('Error fetching data:', error));
  };

  return (
    <div className="container">
      <h1>TV Shows</h1>
      <InputGroup className="mb-3">
        <Form.Control
          placeholder="Search TV shows..."
          aria-label="Search TV shows"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Button className='btn btn-info px-3' onClick={() => setPage(1)}>Search</Button>
      </InputGroup>
      <div className="row">
        {tvShows.map(tvShow => (
          <div className="col-md-4 mb-4" key={tvShow.id}>
            <Card className="h-100">
              <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500${tvShow.poster_path}`} style={{ height: '400px', objectFit: 'cover' }} />
              <Card.Body className="d-flex flex-column">
                <Card.Title className="text-center">{tvShow.name}</Card.Title>
                <Card.Text className="flex-grow-1">
                  {tvShow.overview.length > 100 ? tvShow.overview.substring(0, 100) + '...' : tvShow.overview}
                </Card.Text>
                <a href={`https://www.themoviedb.org/movie/${tvShow.id}`} >
                 
                  <Button className="w-100 btn btn-success">View Details</Button>
                </a>              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
      <Pagination className="mt-4 justify-content-center ">
        <Pagination.First onClick={() => setPage(1)} />
        <Pagination.Prev onClick={() => setPage(prev => Math.max(prev - 1, 1))} />
        {[...Array(20).keys()].map(number => (
          <Pagination.Item key={number + 1} active={number + 1 === page} onClick={() => setPage(number + 1)}>
            {number + 1}
          </Pagination.Item>
        ))}
        <Pagination.Next onClick={() => setPage(prev => Math.min(prev + 1, totalPages))} />
        <Pagination.Last onClick={() => setPage(20)} />
      </Pagination>

    </div>

  );
};

export default TVShows;

// import React from 'react';

// function Home() {
//   return (
//     <div className="container px-4 md:px-6 py-12">
//       <h1 className="text-3xl font-bold">Welcome to MovieHub</h1>
//       <p className="mt-4">Explore movies, TV shows, and more.</p>
//     </div>
//   );
// }

// export default Home;
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card, Button } from "react-bootstrap";

function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://api.themoviedb.org/3/movie/popular",
          {
            params: {
              api_key: "aa6fc65fcedb7431af3ac2fbe6484cd0",
            },
          }
        );
        setMovies(response.data.results);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  // const [movies, setMovies] = useState([]);

  // useEffect(() => {
  //   axios.get('https://api.themoviedb.org/3/movie/popular', {
  //     params: {
  //       api_key: 'aa6fc65fcedb7431af3ac2fbe6484cd0'
  //     }
  //   })
  //     .then(response => setMovies(response.data.results))
  //     .catch(error => console.error('Error fetching data:', error));
  // }, []);

  return (
    <div className="container">
      <h1>Home Page</h1>
      <div className="row">
        {movies.map((movie) => (
          <div className="col-md-4 mb-4" key={movie.id}>
            <Card style={{ width: "100%", height: "100%" }}>
              <Card.Img
                variant="top"
                style={{ width: "100%", height: "150px", objectFit: "cover" }}
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
                <Card.Title>{movie.title}</Card.Title>
                <Card.Text style={{ flexGrow: 1 }}>{movie.overview}</Card.Text>
                <a href={`https://www.themoviedb.org/movie/${movie.id}`} target="_blank" rel="noReferrer">
                  {" "}
                  <Button variant="primary">View Details</Button>
                </a>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;

// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { Card, Button } from 'react-bootstrap';

// const Home = () => {
//   const [movies, setMovies] = useState([]);

//   useEffect(() => {
//     axios.get('https://freetestapi.com/api/v1/movies')
//       .then(response => setMovies(response.data))
//       .catch(error => console.error('Error fetching data:', error));
//   }, []);

//   return (
//     <div className="container">
//       <h1>Home Page</h1>
//       <div className="row">
//         {movies.map(movie => (
//           <div className="col-md-4 mb-4" key={movie.id}>
//             <Card>
//               <Card.Img variant="top" src={movie.poster} />
//               <Card.Body>
//                 <Card.Title>{movie.title}</Card.Title>
//                 <Card.Text>
//                   {movie.plot}
//                 </Card.Text>
//                 <Button variant="primary">View Details</Button>
//               </Card.Body>
//             </Card>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Home;

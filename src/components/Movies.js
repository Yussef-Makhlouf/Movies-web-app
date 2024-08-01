import React from "react";

function Movies() {
    return (
        <div className="container px-4 md:px-6 py-12">
            <h1 className="text-3xl font-bold">Movies</h1>
            <p className="mt-4">Explore movies here.</p>
        </div>
    );
}
export default Movies;

// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { Card, Button } from 'react-bootstrap';

// const Movies = () => {
//   const [movies, setMovies] = useState([]);

//   useEffect(() => {
//     axios.get('https://api.themoviedb.org/3/movie/popular')
//       .then(response => setMovies(response.data))
//       .catch(error => console.error('Error fetching data:', error));
//   }, []);

//   return (
//     <div className="container">
//       <h1>Movies</h1>
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

// export default Movies;

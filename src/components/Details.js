
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card } from "react-bootstrap";
import { useParams } from 'react-router-dom';

function Details() {
  const [details, setDetails] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=aa6fc65fcedb7431af3ac2fbe6484cd0`)
      .then(response => {
        setDetails(response.data);
      })
      .catch(error => {
        console.error('Error fetching movie details:', error);
      });
  }, [id]);



  return (
    <div className="container px-4 md:px-6 py-12">
      <h1 className="text-3xl font-bold">Details</h1>
    

      <div className="row">
        <div className="col-md-8 mb-4">

          {setDetails && (


            <div className="col-md-8">
              <Card style={{ width: "100%", height: "100%" }}>
             
                <Card.Img
                  variant="top"
                  src={`https://image.tmdb.org/t/p/w500${details.poster_path}`}
                />
                <Card.Body
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    height: "100%",
                  }}
                >
                  <Card.Title>{details.title}</Card.Title>
                  <Card.Text style={{ flexGrow: 1 }}>
                    {details.overview}
                    </Card.Text> 
                  <Card.Text>Release Date: {details.release_date}</Card.Text>
                  <Card.Text>Popularity: {details.popularity}</Card.Text>
                  <Card.Text>Vote Average: {details.vote_average}</Card.Text>
                  <Card.Text>Vote Count: {details.vote_count}</Card.Text>
                </Card.Body>
              </Card>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Details;


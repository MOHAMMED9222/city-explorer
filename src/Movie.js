
import React from "react";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

class Movie extends React.Component {
  render() {
        return ( 
        <>
        {this.props.cityMovies.map(movie => 
          
         
        <Card key={movie.title
        }>
          <Card.Img variant="top" src={movie.image_url}/>
          <Card.Body>
            <Card.Title>{movie.title}</Card.Title>
            <Card.Text>
              Overview: {movie.overview}
              </Card.Text>
              </Card.Body>
              <ListGroup.Item>Average Votes: {movie.average_votes}</ListGroup.Item>
              <ListGroup.Item>Total Votes: {movie.total_votes}</ListGroup.Item>
              <ListGroup.Item>Popularity: {movie.popularity}</ListGroup.Item>
              <ListGroup.Item>Released On: {movie.released_on}</ListGroup.Item>
              </Card>
               )}
              </>);
      }
    }

export default Movie;
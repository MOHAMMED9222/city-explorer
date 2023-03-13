
import React from "react";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

class Movie extends React.Component {
  render() {
        return ( 
        <>
        <Card>
          <Card.Img variant="top" src={this.props.image_url}/>
          <Card.Body>
            <Card.Title>{this.props.title}</Card.Title>
            <Card.Text>
              Overview: {this.props.overview}
              </Card.Text>
              </Card.Body>
              <ListGroup.Item>Average Votes: {this.props.average_votes}</ListGroup.Item>
              <ListGroup.Item>Total Votes: {this.props.total_votes}</ListGroup.Item>
              <ListGroup.Item>Popularity: {this.props.popularity}</ListGroup.Item>
              <ListGroup.Item>Released On: {this.props.released_on}</ListGroup.Item>
              </Card>
              </>);
      }
    }

export default Movie;
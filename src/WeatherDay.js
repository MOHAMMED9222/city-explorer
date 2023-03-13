import React from "react";
import ListGroup from 'react-bootstrap/ListGroup';
class WeatherDay extends React.Component {
  render() {

    return(
      <>
        <ListGroup.Item variant="success">Date: {this.props.date}</ListGroup.Item>
        <ListGroup.Item>Description: {this.props.description}</ListGroup.Item>
      </>
    );
  }
}

export default WeatherDay;
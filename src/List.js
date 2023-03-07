import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';

class List extends React.Component {

  render() {
  
    return (
      <>
        <ListGroup>
          <ListGroup.Item>{this.props.data.display_name}</ListGroup.Item>
          <ListGroup.Item>{this.props.data.latitude}</ListGroup.Item>
          <ListGroup.Item>{this.props.data.longitude}</ListGroup.Item>
        </ListGroup>
      </>
    )
  }
}


export default List;

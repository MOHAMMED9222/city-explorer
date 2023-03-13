import React from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class Forms extends React.Component {

  render() {
    return (
      <>
        <Form onSubmit={this.props.submitHandler}>
          <Form.Group>
            <Form.Label>Search for City Data
            <Form.Control type="text" placeholder="eg. Seattle" name="cityInput" onChange={this.props.handleCityInput} required /></Form.Label>
            <Button type="submit">Explore!</Button>
          </Form.Group>
        </Form>

      </>
    );
  }
}

export default Forms;
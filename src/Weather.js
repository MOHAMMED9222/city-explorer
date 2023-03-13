import React from "react";
import ListGroup from 'react-bootstrap/ListGroup';
import WeatherDay from "./WeatherDay";

class Weather extends React.Component {
  render() {

    let weatherList = this.props.cityWeather.map((i,) => {
      return <WeatherDay
      date={i.time}
      description={i.forecast}
      />
    })

   
    //   <>
    //     <ListGroup.Item variant="allowed" key='index'>Date: {i.date}</ListGroup.Item>
    //     <ListGroup.Item>Description: {i.description}</ListGroup.Item>
    //   </>
    // }));

    return (
      <>
        <ListGroup>
          {weatherList}
        </ListGroup>

      </>
    );
  }
}

export default Weather;
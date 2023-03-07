import React from 'react';
import axios from 'axios';
import Form from './Form';
import List from './List';
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cityexplorerData: [],
      cityName: '',
      cityData: {},
      latitude: '',
      longitude: '',
    }
  }


  handleCityInput = (e) => {
    this.setState({
      cityName: e.target.value
    });
  };

  eventHandler = async (e) => {
    e.preventDefault();

    // console.log('event fired');
    // get the data from the SW API
    // axios is the library of code that we will use to make our requests
    let cityexplorercharacters = await axios.get(`https://us1.locationiq.com/v1/search?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&q=${this.state.cityName}&format=json`);
    // console.log(cityexplorercharacters.data.results);
    //save it in state
    this.setState({
      cityData: cityexplorercharacters.data[0],
      latitude: cityexplorercharacters.data[0].latitude,
      longitude: cityexplorercharacters.data[0].longitude
    });

  };



  render() {
    let mapURL = `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&center=47.6038321,-122.330062&zoom=12`;
    return (
      <>
        <main>
          <Form
            handleCityInput={this.handleCityInput}
            eventHandler={this.eventHandler}
            cityData={this.state.cityData}
          />
          <List
            data={this.state.cityData}
          />

        </main>


      </>
    );
  }
}



export default App;
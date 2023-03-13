import React from 'react';
import axios from 'axios';
import Form from './Form';
import List from './List';
import Alert from 'react-bootstrap/Alert';
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Weather from './Weather';
import Movie from './Movie';



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cityexplorerData: [],
      cityName: '',
      cityData: {},
      latitude: '',
      longitude: '',
     gotcityData: false,
      error: false,
      errorMessage: '',
      inputError: true,
      weatherError: true,
      cityWeather: [],
      cityMovies: {},


    }
  }


  handleCityInput = (e) => {
    this.setState({
      cityName: e.target.value
    });
  };

  submitHandler = async (e) => {
    e.preventDefault();
try{
    // console.log('event fired');
    // get the data from the SW API
    // axios is the library of code that we will use to make our requests
    let locationiqdata = await axios.get(`https://us1.locationiq.com/v1/search?key=${process.env.REACT_APP_CITY_KEY}&q=${this.state.cityName}&format=json`);
    console.log(locationiqdata);

    // connect to movie server
    console.log(`${process.env.REACT_APP_SERVER}/movie?keyword=${this.state.cityName}`)
    let willsmithServer = await axios.get(`${process.env.REACT_APP_SERVER}/movie?keyword=${this.state.cityName}`);
    // console.log(willsmithServer)
    // connect lat lon to server
    let connectServer = await axios.get(`${process.env.REACT_APP_SERVER}/weather?search=${this.state.cityName}&lat=${locationiqdata.data[0].lat}&lon=${locationiqdata.data[0].lon}`);
    console.log(connectServer.data)
    //save it in state
    this.setState({
      gotcityData: true,
      cityData: locationiqdata.data[0],
      latitude: locationiqdata.data[0].lat,
      longitude: locationiqdata.data[0].lon,
      error: false,
      cityWeather: connectServer.data,
      cityMovies: willsmithServer.data,
      inputError: false,
      weatherError: false,

    })

  }

  catch(error) {
    this.setState({
      error: true,
      errorMessage: `YOU MAKING BIG MISTAKES: ${error.message}`
    })
  }
}



  render() {
    let mapURL = `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_CITY_KEY}&center=${this.state.latitude},${this.state.longitude}&zoom=12`;
    return (
      <>

        <Form
          handleCityInput={this.handleCityInput}
          submitHandler={this.submitHandler}
          cityData={this.state.cityData}
        />
        {this.state.error === true &&
          <>
            <Alert key='danger' variant='danger'>
              {`${this.state.errorMessage} - your city isn't explorable`}
            </Alert>
            <img class="error" src={`https://http.cat/${this.state.errorMessage}`} alt={`Error with status code ${this.state.errorMessage}`} />
          </>
        }
        <List
          data={this.state.cityData}
        />
        <Weather
        cityWeather={this.state.cityWeather}
        />
        <Movie
        cityMovies={this.state.cityMovies}
        />
        

        {this.state.gotcityData === true &&
        <img src={mapURL}/>
        }
        </>
    );
  }
}


export default App;
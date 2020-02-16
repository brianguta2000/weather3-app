<<<<<<< HEAD
import React from "react";

import Titles from "./components/Titles";
import Form from "./components/Form";
import Weather from "./components/Weather.js";
=======
import React from 'react';
import './App.css';
import Forecast from './components/Forecast';
import Landing from './components/Landing';
import{Route, Link} from 'react-router-dom';
import { BrowserRouter as Router} from 'react-router-dom';
import Title from './components/Title';
import WeatherInfo from './components/WeatherInfo';
import UserLocation from './components/UserLocation';

function App () {
>>>>>>> ff252a63564a9697ec996695e60dbc9fb3f284a6

const API_KEY = 'f2ec56db020648f18b8e19ae3fb1ac4d';

<<<<<<< HEAD
class App extends React.Component {
  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  }
  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=imperial`);
    const data = await api_call.json();
    console.log(data);
    if (city && country) {
      this.setState({
        temperature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        error: ""

      });
    } else {
      this.setState({
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: "Please enter the values."
      });
    }
  }
  render() {
    return (
      <div>
       <div className="wrapper">
         <div className="main">
           <div className="container">
             <div className="row">
               <div className="col-xs-5 title-container">
                 <Titles />
               </div>
               <div className="col-xs-7 form-container">
                 <Form getWeather={this.getWeather} />
                 <Weather
                   temperature={this.state.temperature}
                   humidity={this.state.humidity}
                   city={this.state.city}
                   country={this.state.country}
                   description={this.state.description}
                   error={this.state.error}
                 />
               </div>
             </div>
           </div>
         </div>
       </div>
     </div>
   );
 }
};
=======
  return (
    <div className="App">
    <nav class="navbar navbar-default" id="nav_bar">
      <div class="container">

        <div class="navbar-header">

          <img src="images/logo.png" class="image-responsive" id="logo" alt=""></img><strong>Weather App!</strong>

            <button class="navbar-toggle collapsed" data-toggle="collapse" data-target="navcol">
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
           </button>
        </div>


        <div class="collapse navbar-collapse" id="navcol">
              <ul class="nav navbar-nav navbar-right" id="nav_list">
                <li><a href="sign-in.html">User Sign In</a></li>
                <li><a href="http://www.openweathermap.org">Open Weather Map</a></li>
                <li><Link to='/forecast'>Current Forecast</Link></li>
                <li><a href="http://api.openweathermap.org/data/2.5/forecast?q=Hartford&units=metric&APPID=f2ec56db020648f18b8e19ae3fb1ac4d" target="_blank">5 Day Forecast</a></li>

              </ul>

        </div>

      </div>
    </nav>
    <div>
    <Route path='/forecast' component={Forecast}/>
    <Route path='/' component={Landing}/>
    </div>

</div>

)


}
>>>>>>> ff252a63564a9697ec996695e60dbc9fb3f284a6

export default App;

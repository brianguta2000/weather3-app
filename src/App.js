import React from 'react';
import './App.css';
import Forecast from './components/Forecast';
import Landing from './components/Landing';
import{Route, Link} from 'react-router-dom';
import { BrowserRouter as Router} from 'react-router-dom';
import Title from './components/Title';
import WeatherInfo from './components/WeatherInfo';


function App () {


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

};


export default App;

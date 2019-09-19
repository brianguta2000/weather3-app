import React from 'react';
import './App.css';
import WeatherInfo from "./components/WeatherInfo";
import Forecast from "./components/Forecast";
import{Route, Link} from 'react-router-dom';



function App() {
  return (
    <div className="App">
    <nav class="navbar navbar-default" id="nav_bar">
      <div class="container">
        <div class="navbar-header">
            <a href="#" class="navbar-brand navbar-link weather">
              <img src="images/logo.png" class="image-responsive" id="logo" alt=""></img><strong>Weather App!</strong>
            </a>
            <button class="navbar-toggle collapsed" data-toggle="collapse" data-target="navcol">
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
           </button>
        </div>

        <div class="collapse navbar-collapse" id="navcol">
              <ul class="nav navbar-nav navbar-right" id="nav_list">
                <li><a href="sign-in.html">Sign In</a></li>
                <li><a href="">Open Weather Map</a></li>
                <li><Link to='/forecast'></Link></li>
                <li><a href="http://api.openweathermap.org/data/2.5/weather?q=Hartford&units=imperial&APPID=f2ec56db020648f18b8e19ae3fb1ac4d" target="_blank">Forecast</a></li>
              </ul>
        </div>
      </div>
    </nav>

    <div class="row" id="headRow">
      <div class="col-md-12" id="colText">
        <h2 class="text-center" id="colHeadText1">Your BEST weather app ever!</h2>
        <h2 class="text-center" id="colHeadText2">Get the info you need now!</h2>
      </div>
    </div>

    <div class="row" id="bottomRow">
      <h2 class="text-center" id="colHeadText1">Get your 5 day forecast</h2>
    </div>

    <div class="row" id="bottomRow-2">
      <div class="col-sm-3" >Mon</div>
      <div class="col-sm-3" >Tue</div>
      <div class="col-sm-3" >Wed</div>
      <div class="col-sm-3" >Thur</div>

    </div>
    <Route path='/forecast' component={Forecast}/>
    </div>

  )
};


export default App;

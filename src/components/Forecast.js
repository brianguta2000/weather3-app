import React, {Component} from 'react';
import WeatherInfo from './WeatherInfo';
import Title from './Title';

const API_KEY = '77747c91fe2a9528c08bf35da91b048c';


class Forecast extends React.Component {

  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    temp_min: undefined,
    visibility: undefined,
    speed: undefined,
    error: undefined
  }




  getWeather = async (e) => {

    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    e.preventDefault();
    const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=imperial`);
    const response = await api_call.json();
    console.log(response);
    if(city && country){
      this.setState({
        temperature: response.main.temp,
        city: response.name,
        country: response.sys.country,
        humidity: response.main.humidity,
        description: response.weather[0].description,
        temp_min: response.main.temp_min,
        visibility: response.visibility,
        speed: response.wind.speed,
        error: ""
      })
    }else{
      this.setState({
        error: "Please input search values..."
      })
    }
  }

  render() {
console.log(this.state.temperature)
    return (

      <div>

                <div className="text row-center container col-sm-12 col-sm-offset-4">
                <WeatherInfo loadWeather={this.getWeather} />
                  <Title
                    temperature={this.state.temperature}
                    city={this.state.city}
                    country={this.state.country}
                    humidity={this.state.humidity}
                    description={this.state.description}
                    temp_min={this.state.temp_min}
                    visibility={this.state.visibility}
                    speed={this.state.speed}
                    error={this.state.error}
                  />

                </div>

    </div>

    )
  }
}




 export default Forecast;

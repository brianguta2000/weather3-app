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
    pressure: undefined,
    temp_min: undefined,
    error: undefined
  }


  getWeather = async (e) => {

    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    e.preventDefault();
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=imperial`);
    const response = await api_call.json();
    console.log(response);
    if(city && country){
      this.setState({
        temperature: response.main.temp,
        city: response.name,
        country: response.sys.country,
        humidity: response.main.humidity,
        description: response.weather[0].description,
        pressure: response.main.pressure,
        temp_min: response.main.temp_min,
        error: ""
      })
    }else{
      this.setState({
        error: "Please input search values..."
      })
    }
  }

  render() {

    return (

      <div>

                <div className="container col-sm-12 col-sm-offset-3">
                <WeatherInfo loadWeather={this.getWeather} />
                  <Title
                    temperature={this.state.temperature}
                    city={this.state.city}
                    country={this.state.country}
                    humidity={this.state.humidity}
                    description={this.state.description}
                    pressure={this.state.pressure}
                    temp_min={this.state.temp_min}
                    error={this.state.error}

                  />

                </div>

    </div>

    )
  }
}




 export default Forecast;

import React, {Component} from 'react';
import WeatherInfo from "./WeatherInfo";

const API_KEY = '77747c91fe2a9528c08bf35da91b048c';

class Forecast extends Component {
  constructor(props){
    super(props)
    this.state = {
      temperature: undefined,
      humidity: undefined,
      description: undefined,
      city: undefined,
      error: undefined
    }

    this.handleSubmit=this.handleSubmit.bind(this);
  }
  async handleSubmit(e){
    e.preventDefault();
    const city = e.target.elements.city.value;

    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
    const data = await  api_call.json();
    if (city) {
      this.setState({
          temperature: data.main.temp,
          city: data.name,
          humidity: data.main.humidity,
          description: data.weather[0].description,
          error: ""
});

} else {
     this.setState({
       temperature: undefined,
       city: undefined,
       humidity: undefined,
       description: undefined,
       error: "Please enter the values."
     });
  }
}




  render(){
    return(

  <div>

  <form onSubmit={ this.handleSubmit}>
  <label>
 <input type="text" ref={this.cityRef} value={this.state.city} onChange={this.handleSubmit} />
  </label>
  <input type="submit" value="Submit"/>
  </form>
  <WeatherInfo
                      temperature={this.state.temperature}
                      humidity={this.state.humidity}
                      city={this.state.city}
                      description={this.state.description}
                      error={this.state.error}
                    />

</div>


    );
  }
};


export default Forecast;

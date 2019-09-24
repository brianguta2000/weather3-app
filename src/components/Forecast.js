import React, {Component} from 'react';

const API_KEY = '77747c91fe2a9528c08bf35da91b048c';

class Forecast extends Component {
  constructor(props){
    super(props)
    this.state = {
      city:"undefined",
    };

    this.handleSubmit=this.handleSubmit.bind(this);
  }
  handleSubmit(e){
    e.preventDefault();
  }

  updateWeather(){
    const {city} = this.state;
  }



  render(){
    const {city} = this.state
    const api_call = fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
    return (
  <div>
     city={this.state.city}

  <form name="myForm" onSubmit={this.handleSubmit}>
  <input type="text" name="fname"/>
  <input type="submit" value="Submit"/>
  </form>
</div>
  );
  }

};

export default Forecast;

import React, {Component} from 'react';

const API_KEY = '77747c91fe2a9528c08bf35da91b048c';

class Forecast extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      value: 'city'};

    this.handleSubmit=this.handleSubmit.bind(this);
  }
  handleSubmit(e){
    e.preventDefault();
    const city = e.target.elements.city.value;

    const api_call = fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
    const data = api_call.json();
    if (city) {
      this.setState({
          temperature: data.main.temp,
          city: data.name
});
} else {
     this.setState({
       temperature: undefined,
       city: undefined,
});
  }
}




  render(){
      return (

  <form onSubmit={ this.handleSubmit}>
  <label>
  <input type="text" value={this.state.city} onChange={this.handleSubmit} />
  </label>
  <input type="submit" value="City"/>
  </form>




    );
  }

};


export default Forecast;

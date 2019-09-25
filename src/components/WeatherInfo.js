import React from "react";



export default class WeatherInfo extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const  { location, temperature, humidity, description  } = this.props;

    return(
      <div className="weather-container">
              <div className="header">{location}</div>
              <div className="inner-container">
                <div className="image">
                  <img src={description} />
                </div>
                <div className="current-weather">{temperature}°</div>
              </div>
              <div className="footer">{humidity}</div>
            </div>
          );
        }
      }

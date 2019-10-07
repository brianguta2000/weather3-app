import React from "react";

class Title extends React.Component{

    render(){

        return(

            <div className="weather-info">
                {
                    this.props.country && this.props.city && <p className="weather__key">Location:
                        <span className="weather__value">  {this.props.city}, {this.props.country}</span>
                    </p>
                }

                {
                    this.props.description && <p className="weather__key">Conditions:
                        <span className="weather__value">  {this.props.description}</span>
                    </p>
                }

                {
                    this.props.temperature && <p className="weather__key">Temperature:
                       <span className="weather__value">  {this.props.temperature}&deg;F / C</span>
                    </p>
                }

                {
                    this.props.temp_min && <p className="weather__key">Temperature_Min:
                        <span className="weather__value">  {this.props.temp_min}&deg;F</span>
                    </p>
                }

                {
                    this.props.humidity && <p className="weather__key">Humidity:
                        <span className="weather__value">  {this.props.humidity}%</span>
                    </p>
                }

                {
                    this.props.visibility && <p className="weather__key">Visibility:
                        <span className="weather__value">  {this.props.visibility}ft</span>
                    </p>
                }

                {
                    this.props.speed && <p className="weather__key">Windspeed:
                        <span className="weather__value">  {this.props.speed}miles/hr</span>
                    </p>
                }

                {
                    this.props.error && <p className="weather__error">{this.props.error}</p>
                }

            </div>
        )
    }
}

export default Title;

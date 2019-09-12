import React from "react";


fetch("http://api.openweathermap.org/data/2.5/weather?q=London&units=metric&APPID=f2ec56db020648f18b8e19ae3fb1ac4d")

  .then(

    r => {
      return r.json();
    }
  )
  .then(

    data => {
      console.log(data);
    }
  )
  .catch(e => {
    console.log(`An error occurred: ${e}`);
  });

//export default WeatherInfo;

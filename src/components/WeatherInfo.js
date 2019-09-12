import React from "react";


fetch("https://api.darksky.net/forecast/b72bd4877f90e589e5f492a71f88dcc8/37.8267,-122.4233")

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

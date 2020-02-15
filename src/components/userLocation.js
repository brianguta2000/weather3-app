import React from "react";

class UserLocation extends React.Component {
  render(){

    return(


      function showPosition() {
        if(navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function(position) {
                var positionInfo = "Your current position is (" + "Latitude: " + position.coords.latitude + ", " + "Longitude: " + position.coords.longitude + ")";
                document.getElementById("result").innerHTML = positionInfo;
            });
        } else {
            alert("Sorry, your browser does not support HTML5 geolocation.");
      }
    },

   <div>
    <div id="result">
<button type="button" onclick="showPosition();">Show Position</button>
    </div>
</div>



    );
  }
};

export default UserLocation;

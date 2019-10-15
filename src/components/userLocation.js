import React from "react";

class userLocation extends React.Component{
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
      <title>Get Current Position</title>
    <div id="result">
<button type="button" onclick="showPosition();">Show Position</button>
    </div>
</div>



)
}
}


export default userLocation;

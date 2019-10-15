import React, {Component} from 'react';

class Landing extends Component {
  render(){
    return (



  <div>
    <div class="row" id="headRow">
      <div class="col-md-12" id="colText">
        <h2 class="text-center" id="colHeadText1">Your BEST weather app ever!</h2>
        <h2 class="text-center" id="colHeadText2">Get the info you need now!</h2>
      </div>
    </div>

    <div class="row" id="bottomRow">
      <h2 class="text-center" id="colHeadText1">Get your 5 day forecast</h2>
    </div>

    <div class="row" id="bottomRow-2">
      <div class="col-sm-3" >Mon</div>
      <div class="col-sm-3" >Tue</div>
      <div class="col-sm-3" >Wed</div>
      <div class="col-sm-3" >Thur</div>
    </div>
</div>
  );
  }

};

export default Landing;

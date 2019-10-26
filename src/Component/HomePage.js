import React, { Component } from 'react';
import {Card, Button} from 'react-bootstrap';
import { MDBView, MDBMask } from
"mdbreact";
import { Link } from 'react-router-dom';


class HomePage extends Component {
  render() {
    return (<div>
        <br/>
        <br/>
        <br/>
        <br/> 
        <div class="row">
    <div class="col s12 m7">
      <div class="card" style={{width: '20rem'}}>
        <div class="card-image">
          <img height="220" src="http://s3.amazonaws.com/bizenglish/wp-content/uploads/2019/03/28132918/KING-LONG-bus.jpg"/>
          <span class="card-title" style={{color:'White',weight: 'bold'}}><b>Book Tickets</b></span>
        </div>
        <div class="card-content">
          <p>Book Buses</p>
        </div>
        <div class="card-action">
        <Link to="/booklist"><Button className="btn green darken-3">Book</Button></Link>
        </div>
      </div>
    </div>
    <div class="col s12 m7">
      <div class="card" style={{width: '20rem'}}>
        <div class="card-image">
          <img src="https://www.consumerguide.sg/wp-content/uploads/Couple-travelling-flipped.jpg"/>
          <span class="card-title"><b>Bus Details</b></span>
        </div>
        <div class="card-content">
          <p>Expore the Prices of Bus Tickets and details of Buses</p>
        </div>
        <div class="card-action">
        <Link to="/bus"><Button className="btn green darken-3">See Details</Button></Link>
        </div>
      </div>
    </div>

    <div class="col s12 m7">
      <div class="card" style={{width: '20rem'}}>
        <div class="card-image">
          <img src="https://media.self.com/photos/5b048339fb856d7d3d02375d/4:3/w_752,c_limit/first-backpacking-trip.jpg"/>
          <span class="card-title"><b>About Us</b></span>
        </div>
        <div class="card-content">
          <p>Want to know who we are ?</p>
        </div>
        <div class="card-action">
        <Link to="/about"><Button className="btn green darken-3">Learn</Button></Link>
        </div>
      </div>
    </div>


  </div>
               </div>          

  
    );
  }
}

export default HomePage;
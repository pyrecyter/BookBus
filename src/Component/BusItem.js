import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class BusItem extends Component{
    constructor(props){
        super(props);
        this.state = {
            item:props.item
        }
    }
    render(){
        return(
           // <li className = "collection-item"> <Link to={`/booklist/${this.state.item.bno}`} >{this.state.item.bname}</Link></li>         <Link to ={`/bookform/${this.state.item.bno}`}>BOOK</Link>
           <div class="row">
           <div class="col s12 m7">
           <div class="card blue-grey darken-1">
                                            
                   <div class="card-content white-text">
                   <span class="card-title">{this.state.item.bname} &nbsp;{this.state.item.bno}</span>
                  
                    <p>   </p>
                    <p> Bus Number      : {this.state.item.bno}     </p>
                    <p> Bus Ticket Price: {this.state.item.bprice}  </p>
                    <p> No of Seats      : {this.state.item.bseat}   </p>
                           </div>
                    <div class="card-action">
                    <Link to ={`/bookform/${this.state.item.bno}/${this.state.item.bprice}`}>BOOK</Link>
                       </div>
                   </div>
                   </div>
               </div>                
        )
    }
}


export default BusItem;

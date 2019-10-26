import React, {Component} from 'react'
import { db } from '../services/firebase'



class Bus extends Component{
    state = {
        busses: null
    }
    componentDidMount(){

        this.getBus();
    }
    
    getBus(){
        console.log('Mounted')
        db.collection('Buses')
          .get()
          .then(    snapshot => {
              const busses = []
              snapshot.forEach( doc =>{
                  const data = doc.data()
                  busses.push(data)
              })
              this.setState({   busses: busses})
              console.log(snapshot)
          })
          .catch(   error => console.log(error))
    }
    render(){
        return(
         <div>
              <h2><u>List of Busses</u></h2>
                {
                    this.state.busses && 
                    this.state.busses.map(  bus =>{
                        return(
                            <div class="row">
                                <div class="col s12 m7">
                                <div class="card blue-grey darken-1">
                                                                 
                                        <div class="card-content white-text">
                                        <span class="card-title">{bus.bname} &nbsp;{bus.bno}</span>
                                       
                                         <p>   </p>
                                         <p> Bus Number      : {bus.bno}     </p>
                                         <p> Bus Ticket Price: {bus.bprice}  </p>
                                         <p> No of Seats      : {bus.bseat}   </p>
                                                </div>
                                         <div class="card-action">
                                          <a href="#">See Time Table</a>
                                            </div>
                                        </div>
                                        </div>
                                    </div>                
                        )
                    })
                }
            </div>
        )
    }

}

export default Bus;
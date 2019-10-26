import React, { Component } from 'react';
import BusItem from './BusItem';
import { db } from '../services/firebase'


class BookList extends Component{
    constructor(){
        super();
        this.state = {
            busses: null
        }
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
        
        const BusItems = this.state.busses && 
        this.state.busses.map(  bus =>{ 
            return(
               <BusItem key={bus.bno}  item={bus}/>
            )
        })
        return(
            <div>
                
                <br/>
                <br/> 
                <ul class="collection with-header">
                <li class="collection-header"><h4>Choose a Bus</h4></li>
                    {BusItems}
                </ul>
            </div>

        )
    }
}

export default BookList;
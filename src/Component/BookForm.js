import React, {Component} from 'react'
import { db } from '../services/firebase'
import { Link } from 'react-router-dom';



class BookForm extends Component{
    constructor(props){
        super(props);
    
    this.state = {
        Total:'',
        busses: '',
        check:'',
        bno : this.props.match.params.bno,
        bprice : this.props.match.params.bprice,
        date : this.refs.date
    }
    this.getBus = this.getBus.bind(this);
    this.handleChange = this.handleChange.bind(this);

}

    componentDidMount(){

        this.getBus();
    }


    handleChange(event) {
        this.setState({value: event.target.value});
        console.log(event.target.value);
        let tot;
       

        
             tot = (this.state.bprice * event.target.value);
        

        console.log(this.state.bprice)
        console.log(tot);
        this.setState({Total: tot})

      }
    
    getBus(){
      

        console.log('Mounted')
        db.collection('Buses')
          .where("bno", "==", "1")
          .get()
          .then(    querySnapshot => {
            const data = querySnapshot.docs.map(doc => doc.data());
            console.log(data);
                  
                  
                
              })            
          .catch(   error => console.log(error))
    }

    
    
    render(){
        const {Total} = this.state;
        return(
            <div>
              
            <br/>
            
          <Link className="btn green darken-3" to  ="/">Back</Link>

          
            <h3>Booking Details</h3>
          <form>
          <ul className="collection">
            <li className="collection-item">Bus Number : <b><h5>{this.state.bno}</h5></b> </li>
            <li className="collection-item">
                
                
                               
                <div className="input-field col s6">
                    <input id="date" type="date" className="validate" ref="date"  required/>
                    <label htmlFor="date">Select a Date </label>
                </div>
                    
                
                <div className="input-field col s6">
                    <input id="bticket" type="number" className="validate" required onChange={this.handleChange}/>
                    <label htmlFor="bticket">Number of Tickets</label>
                </div>
                

                <label>Total Price</label>
                <div className="input-field col s12">
                <input disabled value={"Your Total : "+Total + " LKR"} id="disabled" type="text" className="validate"/>

                  
                    
                </div>
            </li>
            
          </ul>
          <Link to={{pathname: `/cardpayment/${this.state.bno}/${this.state.bprice}`, Total}} ><button className="btn green">Book<i className="material-icons right">send</i></button></Link> &nbsp;
         
          </form>
      </div>
    )
        
    }

}

export default BookForm;
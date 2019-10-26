import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './HomePage';
import Bus from './Bus';
import BookForm from './BookForm';
import BookList from './BookList';
import CardPayment from './CardPayment';



const Main = () => (
    <main>
        <Switch>
            <Route exact path ='/'      component = {Home}/>
            <Route exact path ='/bus'   component = {Bus}/>
            <Route exact path = '/booklist' component = {BookList}/>
            <Route exact path = '/bookform/:bno/:bprice' component = {BookForm}/>
            <Route exact path = '/cardpayment/:bno/:bprice' component = {CardPayment}/>
        </Switch>
    </main>
)

export default Main;

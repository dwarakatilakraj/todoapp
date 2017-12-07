import React, { Component } from 'react';
import Home from './components/Home'
import About from './components/About'
import {Route, Link, Switch,Redirect} from 'react-router-dom'

export default class Routes extends Component{
    render(){
        return(
            <div>
            <Link to="/">Home Page</Link>
             <Link to="/about">About</Link>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            </div>
        )
    }
}
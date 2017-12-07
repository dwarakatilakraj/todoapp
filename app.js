import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import {BrowserRouter} from 'react-router-dom'
import Routes from './routes'
export default class App extends Component {
   
    render() {
            console.log("hello");
        
        return (
            <BrowserRouter>
                <Routes></Routes>
            </BrowserRouter>
        );
    }
}
ReactDOM.render(<App/>, document.getElementById('hello'))
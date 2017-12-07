import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Todo from './todoapp';

export default class todoitem extends Component{
    render(){
        return(
            <li>
                <div>
                    <span>{this.props.item}</span>
                    </div>
                </li>
        )
    }

}
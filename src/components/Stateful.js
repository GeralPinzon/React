import { render } from '@testing-library/react';
import React, {Component} from 'react';

class Stateful extends Component{
    constructor(props){
        super(props);
        this.state={
            hola = 'Hola mundo REACT'
        }
    }
    render(){
        return(
            <h1>{this.state.hola}</h1>
        )
    }
};
export default Stateful;
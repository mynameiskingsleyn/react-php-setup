import React,{Component, Fragment } from 'react';
import { render } from 'react-dom';

export default class Tester extends Component
{
  render(){
    return(
      <h2> tester works alone </h2>
    );
  }
}

render(<Tester/>, document.getElementById('tester'));

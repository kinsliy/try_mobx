

import React from 'react';

import  mstore from '../../js/store.js';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

class Add extends React.Component{

   
   constructor(props) {
   	super(props);
   	  

   }

   add(){

   	  mstore.count[0].name='kinsliy'
   }


   render() {

       const href= window.location.href;
   	  return(
          <React.Fragment>
         <div onClick={this.add.bind(this)}>+</div>
         <Link to='/demo/index?cd=1&num=12'>跳转</Link>
          </React.Fragment>
   	  	)
   }



}


export default Add;
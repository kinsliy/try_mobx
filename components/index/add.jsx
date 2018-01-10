

import React from 'react';

import  mstore from '../../js/store.js';

class Add extends React.Component{

   
   constructor(props) {
   	super(props);
   	  
   }

   add(){

   	  mstore.count[0].name='12'
   }


   render() {
   	  return(
        
         <div onClick={this.add.bind(this)}>+</div>

   	  	)
   }



}


export default Add;
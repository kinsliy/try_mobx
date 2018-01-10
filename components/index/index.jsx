
import React from 'react';

import Sum from './sum.jsx';

import Add from './add.jsx';

import Cancel from './cancel.jsx';


import  mstore from '../../js/store.js';




class Index extends React.Component{
   
    constructor(props) {
    	super(props);
    	
    }

    add(){
      console.log(mstore)
        mstore.add();
    }


    render() {
    	return(
             <React.Fragment>
             
              <Sum  {...mstore}/>

              <Add  {...mstore} />

              <Cancel />

              <div onClick={this.add.bind(this)}>加</div>
              
             </React.Fragment>
    		)
    }



}


export default Index;
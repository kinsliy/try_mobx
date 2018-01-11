
import React from 'react';

import Sum from './sum.jsx';

import Add from './add.jsx';

import Cancel from './cancel.jsx';


import Topic from './demo.jsx';

import  mstore from '../../js/store.js';



class Index extends React.Component{
   
    constructor(props) {
    	super(props);
    	 
    }

    add(){
      console.log(mstore)
        mstore.add();
    }

    componentWillMount(){
        console.log(1)
    }

    componentDidMount() {
         mstore.count[0].a= this.get_id('num')
    }
    

    componentWillUpdate(nextProps, nextState) {
       mstore.num= this.get_id('num')
    }

     get_id(name)
     {
          var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");   
           var r = window.location.search.substr(1).match(reg);   
            if (r != null) return decodeURI(r[2]); return null;   
      }


    render() {
    	return(
             <React.Fragment>
             
            
              <Sum  />
            
              <Add  />

              <Cancel />

              <Topic />

              <div onClick={this.add.bind(this)}>加</div>
              
             </React.Fragment>
    		)
    }



}


export default Index;
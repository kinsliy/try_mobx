
import React from 'react';

import {observer} from "mobx-react";


import {
  withRouter,
} from 'react-router-dom';
 import  mstore from '../../js/store.js';

const Sum =observer(class Sum extends React.Component{
 
    constructor(props) {
    	super(props);
    	console.log(this.props)
    }


     get_id(name)
	{
		      var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");   
           var r = window.location.search.substr(1).match(reg);   
            if (r != null) return decodeURI(r[2]); return null;   
	}

	componentWillMount(){
       
    }

    componentDidMount() {
        console.log(mstore)
    }

   

	

	render() {
		 return(
       
          <div>
          <span>{mstore.count[0].name}</span>
          <span>{mstore.num}</span>
          </div>
	 	)
	}
})





export default withRouter(Sum);
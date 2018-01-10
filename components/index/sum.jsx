
import React from 'react';

import {observer} from "mobx-react";


 import  mstore from '../../js/store.js';

const Sum =observer((props)=>{
 
	 return(
       
          
          <span>{mstore.count[0].name}</span>
  
	 	)
})





export default Sum;
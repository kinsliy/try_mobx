
import React from 'react';
import ReactDOM from 'react-dom';


import Index from '../components/index/index.jsx';


import  mstore from './store.js';

import { Provider } from 'mobx-react';


import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';


 ReactDOM.render(

 	 (

     <Router >
        <Route path="/demo/index" component={Index}/>
     </Router>

    ),
          
          
      
      document.getElementById('body')
 	)




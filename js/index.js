
import React from 'react';
import ReactDOM from 'react-dom';


import Index from '../components/index/index.jsx';


import  mstore from './store.js';

import { Provider } from 'mobx-react';


 ReactDOM.render(
     
          <Index />,
      
      document.getElementById('body')
 	)


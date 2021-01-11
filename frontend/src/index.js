import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import DBContext from "./DBContext";


ReactDOM.render(

  <DBContext>
    <App />
  </DBContext>,
  document.getElementById('root')
);

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import PerLoader from './perLoader';


ReactDOM.render(
    <div>
      <App />
    </div>,
  document.getElementById('root')
);


ReactDOM.render(
  <React.StrictMode>
    <PerLoader />
  </React.StrictMode>,
  document.getElementById('preLoader')
);


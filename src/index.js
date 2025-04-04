// import React from 'react';
// import ReactDOM from 'react-dom';
// // import { PageAction } from '@newrelic/browser-agent/features/page_action';
// import './index.css';
// import App from './App';


// // New Relic configuration options
// const options = {
//   info: { /* ... */ },
//   loader_config: { /* ... */ },
//   init: { /* ... */ },
//   features: [
//     PageAction
//   ]
// };

// // Initialize New Relic with the specified options
// // Note: Replace `initializeNewRelic` with the actual initialization function
// initializeNewRelic(options);

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// Note: New Relic script should be added to public/index.html

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);






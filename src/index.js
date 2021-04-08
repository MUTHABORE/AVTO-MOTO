import React from 'react';
import ReactDOM from 'react-dom';
import App from './app.jsx';
import './sass/style.scss';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './app.jsx';
// import {createStore} from 'redux';
// import {Provider} from 'react-redux';
// import {popup} from './store/popup';

// import './sass/style.scss';

// const store = createStore(
//   popup,
// );

// ReactDOM.render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
//   document.getElementById('root')
// );


import React from 'react';
import ReactDOM from 'react-dom';
import App from './App/App.js';
import './assets/styles/index.css';

// This is what you use to append react to your application html

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

if (module.hot) {
    module.hot.accept('./App/App.js', () => {
        const NextApp = require('./App/App.js').default
        ReactDOM.render(
            <NextApp />,
            document.getElementById('root')
        )
    })
}
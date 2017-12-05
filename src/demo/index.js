import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';


const theRoot = document.getElementById('root');


ReactDOM.render(<App />, theRoot);

if (module.hot) {
  module.hot.accept('./App', () => {
    const NextApp = require('./App').default
    ReactDOM.render(
      <NextApp />,
      theRoot
    )
  })
}

registerServiceWorker();

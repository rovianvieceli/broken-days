import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

document.body.className = "blue-grey lighten-5";
document.getElementById('root').className = "container";

ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();

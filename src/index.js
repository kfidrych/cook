import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './pages/App';
import registerServiceWorker from './registerServiceWorker';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import './slick/slick.css';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
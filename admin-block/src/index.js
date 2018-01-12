import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import AdminBlock from './admin-block/admin-block';
import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<AdminBlock />, document.getElementById('admin-block'));
registerServiceWorker();

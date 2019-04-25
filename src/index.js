import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducer from './Redux/reducer';

let store = createStore(reducer);
console.log(store)




ReactDOM.render(<App />, document.getElementById('root'));


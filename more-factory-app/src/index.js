import React from 'react';
import ReactDOM from 'react-dom'
import App from "./components/App";
import {createStore} from "redux";
import reducers from './reducers';
import {Provider} from 'react-redux';

import './css/index.css';

const store = createStore(reducers);

ReactDOM.render(
    <Provider store={store}><App/></Provider>
    ,
    document.querySelector("#root")
);

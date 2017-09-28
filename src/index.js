import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import reduxThunk from 'redux-thunk';
import reducer from './reducer';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
const initialState = {
  filter:"all",
  picData: PicData(),
}


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

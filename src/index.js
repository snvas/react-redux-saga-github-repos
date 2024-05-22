import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import { configureStore } from '@reduxjs/toolkit';
import gitsReducer from './gitState';
import gitSaga from './gitSaga';

const saga = createSagaMiddleware();
const store = configureStore({
	reducer: {
		gits: gitsReducer
	},
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(saga)
});
saga.run(gitSaga);

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);

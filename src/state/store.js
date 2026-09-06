// npm i redux react-redux redux-thunk (old)
// This is a file that will be used to create the store for the application

// import { createStore, applyMiddleware } from 'redux';
// import thunk from 'redux-thunk';
// import reducers from './reducers';


// const store = createStore( reducers, {}, applyMiddleware(thunk) );  // createStore(reducer, [preloadedState], [enhancer])


// npm install @reduxjs/toolkit (new)

import thunk from 'redux-thunk';
import reducers from './reducers';
import { configureStore } from '@reduxjs/toolkit';


const store = configureStore({
    reducer: reducers,
    middleware: [thunk]
    });

export default store;
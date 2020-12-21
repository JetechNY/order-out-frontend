import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './Redux/rootReducer';
import { Provider } from 'react-redux';

const store = createStore(rootReducer, applyMiddleware(thunk))

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);


//-u sk_test_51I0e33FZLmnVEIlaBVuZMlItVcvIJip6bTlU4ywV907IBvYn6kdjS3SRQogVkak2IWUERR7z46sMppBkN08rsrmN00kzoNO0nG

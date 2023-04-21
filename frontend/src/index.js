import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ModalProvider } from './context/Modal';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import configureStore from './store';
import csrfFetch from './store/csrf';
import * as sessionActions from './store/session';

const store = configureStore();

const renderApplication = () => {
  
  if (process.env.NODE_ENV !== 'production') {
    window.store = store;
    window.csrfFetch = csrfFetch;
    window.sessionActions = sessionActions;
  }

  function Root() {
    return (
      <ModalProvider>
        <Provider store={store}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </Provider>
      </ModalProvider>
    );
  }

  ReactDOM.render(
    <React.StrictMode>
      <Root />
    </React.StrictMode>,
    document.getElementById('root')
  );
}
if (
  sessionStorage.getItem("currentUser") === null ||
  sessionStorage.getItem("X-CSRF-Token") === null 
) {
  // console.log('no user')
  store.dispatch(sessionActions.restoreSession()).then(renderApplication);
} else {
  // console.log('logged in user')
  renderApplication();
}


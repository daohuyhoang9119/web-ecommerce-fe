import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { applyMiddleware, compose, createStore } from "redux";
import createSagaMiddleware from "redux-saga";

export const Context = React.createContext();

const composeEnhancers =
  typeof window === "object" && window["__REDUX_DEVTOOLS_EXTENSION_COMPOSE__"]
    ? window["__REDUX_DEVTOOLS_EXTENSION_COMPOSE__"]({})
    : compose;

const sagaMiddleware = createSagaMiddleware();
let store;

function App({ children, reducers, appSaga }) {
  if (!store) {
    if (!reducers) reducers = () => {};
    store = createStore(
      reducers,
      composeEnhancers(applyMiddleware(sagaMiddleware))
    );
    sagaMiddleware.run(appSaga);
  }

  return (
    <Provider store={store}>
      <Context.Provider>{children}</Context.Provider>
    </Provider>
  );
}

const AppProvider = ({ children, reducers, appSaga }) => {
  return (
    <BrowserRouter>
      <App reducers={reducers} appSaga={appSaga}>
        {children}
      </App>
    </BrowserRouter>
  );
};

export default AppProvider;

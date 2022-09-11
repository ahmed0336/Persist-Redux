import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import {PersistGate} from "redux-persist/integration/react"
import {store, persist } from "./redux/Store";
import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  
    <Provider store={store}>
      <PersistGate loading={null} persistor={persist}>
         <App />
      </PersistGate>
    </Provider>
 
);

reportWebVitals();

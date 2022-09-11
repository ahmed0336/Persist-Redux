import { combineReducers } from "redux";

import counterReducer from "./countreducer";

// import { formreducerfunction}  from "./FormReducer"
// import {ProductReducer} from "./ProductReducer"


const rootReducer = combineReducers({
counter:    counterReducer,
    // formreducerfunction,
    // ProductReducer
    
});
export default rootReducer;

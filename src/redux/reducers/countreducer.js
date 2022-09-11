
import { INCREMENT, DECREMENT, FORM } from "../action/actionFunction";
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'counter',
  storage: storage,
};







//switch case matching wo onclick use pata chalata hai ke konsa action perform krna hai yeh nichey hua hai


const counterReducer = (state = { myform: {} }, action) => {

  console.log("myform ==> ", action)

  const counter = action.payload



  switch (action.type) {
    case INCREMENT:
      return { ...state, counter }



    case DECREMENT:


      return { ...state, counter }


    case FORM:


      return { ...state, myform: action.payload };


    default:
      return { ...state };
  }


};

export default persistReducer(persistConfig, counterReducer)

import { applyMiddleware, combineReducers, createStore } from "redux";
import acountReducer from "./feature/accounts/accountSlice";
import customerReducer from "./feature/customers/customerSlice";
import { thunk } from "redux-thunk";

//import { composeWithDevTools } from "redux-devtools-extension";

const rootReducer = combineReducers({
  account: acountReducer,
  customer: customerReducer,
});

// Aapke app ke jitne bhi data / states hain (account, customer etc.) wo sab ek hi central jagah (store) me rehte hain.
const store = createStore(rootReducer, applyMiddleware(thunk));

// ye yha pr composeWithDevTools redux-devtools-extension ke liye likha gya tha jo version redux 4 ka h yha nhi chalega
// const store = createStore(
//   rootReducer,
//   composeWithDevTools(applyMiddleware(thunk))
// );

export default store;

import { combineReducers, createStore } from "redux";
import acountReducer from "./feature/accounts/accountSlice";
import customerReducer from "./feature/customers/customerSlice";
const rootReducer = combineReducers({
  account: acountReducer,
  customer: customerReducer,
});

// Aapke app ke jitne bhi data / states hain (account, customer etc.) wo sab ek hi central jagah (store) me rehte hain.
const store = createStore(rootReducer);

export default store;

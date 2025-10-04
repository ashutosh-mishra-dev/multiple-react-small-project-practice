// ------------------------------------ no need ❌ old code of redux --------------------------------------------------
//import { applyMiddleware, combineReducers, createStore } from "redux";
//import { thunk } from "redux-thunk";
// //import { composeWithDevTools } from "redux-devtools-extension";
//import acountReducer from "./feature/accounts/accountSlice";
//import customerReducer from "./feature/customers/customerSlice";

// const rootReducer = combineReducers({
//   account: acountReducer,
//   customer: customerReducer,
// });

//const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

// -------------------------------------------------------------------------------------------

import { configureStore } from "@reduxjs/toolkit";
import acountReducer from "./feature/accounts/accountSlice";
import customerReducer from "./feature/customers/customerSlice";

// rtk ko use karne ka fayada redux ko manually use nhi karna padega rtk sab automatically kar dega state management , redux thunk aur redux toolskit bhi
// Aapke app ke jitne bhi data / states hain (account, customer etc.) wo sab ek hi central jagah (store) me rehte hain.
// ab ye rootReducer h.
const store = configureStore({
  reducer: {
    account: acountReducer,
    customer: customerReducer,
  },
});

export default store;

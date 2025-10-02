//import { legacy_createStore as createStore} from 'redux'
import { combineReducers, createStore } from "redux";

//------------------------ initial State for Account  ----------------------------------
const initialStateAccount = {
  balance: 0,
  loan: 0,
  loanPurpose: "",
};

//------------------------ initial State for customer  ----------------------------------
const initialStateCustomer = {
  fullName: "",
  nationalID: "",
  createdAt: "",
};
//------------------------ accounts  reducer  start ----------------------------------
function aacountReducer(state = initialStateAccount, action) {
  switch (action.type) {
    case "account/deposite":
      return { ...state, balance: state.balance + action.payload };
    case "account/withdraw":
      return { ...state, balance: state.balance - action.payload };
    case "account/requestLoan":
      return {
        ...state,
        loan: action.payload.amount,
        loanPurpose: action.payload.purpose,
        balance: state.balance + action.payload.amount,
      };
    case "account/payLoan":
      return {
        ...state,
        loan: 0,
        loanPurpose: "",
        balance: state.balance - state.loan,
      };

    default:
      return state;
  }
}
//------------------------ accounts  reducer  end ----------------------------------

//------------------------ customer  reducer  start ----------------------------------
function customerReducer(state = initialStateCustomer, action) {
  switch (action.type) {
    case "customer/createCustomer":
      return {
        ...state,
        fullName: action.payload.fullName,
        nationalID: action.payload.nationalID,
        createdAt: action.payload.createdAt,
      };
    default:
      return state;
  }
}
//------------------------ customer  reducer  end ----------------------------------

// here we create root reducer for multiple reducer
const rootReducer = combineReducers({
  account: aacountReducer,
  customer: customerReducer,
});

// Aapke app ke jitne bhi data / states hain (account, customer etc.) wo sab ek hi central jagah (store) me rehte hain.
const store = createStore(rootReducer);

// store.dispatch({ type: "account/deposite", payload: 500 });
// console.log("deposite : ", store.getState());

// store.dispatch({ type: "account/withdraw", payload: 200 });
// console.log("withdraw : ", store.getState());

// store.dispatch({
//   type: "account/requestLoan",
//   payload: { amount: 1000, purpose: "Buy a car" },
// });
// console.log("requestLoan : ", store.getState());

// store.dispatch({ type: "account/payLoan", payload: 100 });
// console.log("payLoan : ", store.getState());

//------------------------ accounts all action method for reducer  start ----------------------------------

//------------------------ account all action method for reducer end ----------------------------------

//------------------------ customer all action method for reducer start ----------------------------------
function createCustomer(fullName, nationalID) {
  return {
    type: "customer/createCustomer",
    payload: { fullName, nationalID, createdAt: new Date().toDateString() },
  };
}

function updateName(fullName) {
  return { type: "customer/updateName", payload: fullName };
}

store.dispatch(createCustomer("Krishna mishra", "adhar card"));
store.dispatch(updateName("Krishna mishra"));
console.log(store.getState());

//------------------------ customer all method action for reducer end ----------------------------------

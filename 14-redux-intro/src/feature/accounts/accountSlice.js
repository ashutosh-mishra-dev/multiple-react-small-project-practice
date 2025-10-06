//------------------------ here we are writen code mordern RTK open -----------------------------------------
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  balance: 0,
  loan: 0,
  loanPurpose: "",
  isLoading: false,
};

const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    deposite(state, action) {
      state.balance += action.payload;
    },
    withdraw(state, action) {
      state.balance -= action.payload;
    },

    requestLoan: {
      prepare(amount, purpose) {
        return {
          payload: { amount, purpose },
        };
      },
      reducer(state, action) {
        if (state.loan > 0) return;
        state.loan = action.payload.amount;
        state.loanPurpose = action.payload.purpose;
        state.balance = state.balance + action.payload.amount;
      },
    },

    payLoan(state, action) {
      state.balance -= state.loan;
      state.loan = 0;
      state.loanPurpose = "";
    },
  },
});

console.log(accountSlice);
export const { deposite, withdraw, requestLoan, payLoan } =
  accountSlice.actions;
export default accountSlice.reducer;

//------------------------ here we are writen code mordern RTK close -----------------------------------------

// --------------------------- redux old code ----------------------------------------------------------

// // yha sare state variable initialize kiye gye h
// const initialStateAccount = {
//   balance: 0,
//   loan: 0,
//   loanPurpose: "",
//   isLoading: false,
// };

// // yha acount ek Reducer h jo export kiya ja rha h store.js means direct redux ko
// export default function acountReducer(state = initialStateAccount, action) {
//   switch (action.type) {
//     case "account/deposite":
//       return {
//         ...state,
//         balance: state.balance + action.payload,
//         isLoading: false,
//       };

//     case "account/withdraw":
//       return { ...state, balance: state.balance - action.payload };

//     case "account/requestLoan":
//       return {
//         ...state,
//         loan: action.payload.amount,
//         loanPurpose: action.payload.purpose,
//         balance: state.balance + action.payload.amount,
//       };

//     case "account/payLoan":
//       return {
//         ...state,
//         loan: 0,
//         loanPurpose: "",
//         balance: state.balance - state.loan,
//       };

//     case "account/convertingCurrency":
//       return { ...state, isLoading: true };

//     default:
//       return state;
//   }
// }

// //deposite, withdraw,requestLoan,payLoan ye part jodta h ya export ho rha h react ke component ke liye
// export function deposite(amount, currency) {
//   if (currency === "INR") return { type: "account/deposite", payload: amount };

//   // middleware for convert currency
//   return async function (dispatch, getState) {
//     dispatch({ type: "account/convertingCurrency" });
//     //API call
//     const res = await fetch(
//       `https://api.frankfurter.app/latest?amount=${amount}&from=${currency}&to=INR`
//     );

//     const data = await res.json();
//     const convertedAmount = data.rates.INR;
//     //console.log(converted);

//     // return action
//     dispatch({ type: "account/deposite", payload: convertedAmount });
//   };
// }

// export function withdraw(amount) {
//   return { type: "account/withdraw", payload: amount };
// }

// export function requestLoan(amount, purpose) {
//   return {
//     type: "account/requestLoan",
//     payload: { amount, purpose },
//   };
// }

// export function payLoan() {
//   return { type: "account/payLoan" };
// }

//--------------------------------------------------------------------------------------------------

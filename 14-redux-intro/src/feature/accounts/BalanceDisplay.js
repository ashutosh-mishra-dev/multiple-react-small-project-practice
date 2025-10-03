import { connect, useSelector } from "react-redux";

function formatCurrency(value) {
  return new Intl.NumberFormat("en", {
    style: "currency",
    currency: "USD",
  }).format(value);
}

// mordern way to connect react to redux and get data/state form redux reducer
//function BalanceDisplay() {

//const account = useSelector((store) => store.account);

//const { balance: currencyBalance } = useSelector((store) => store.account);

//return <div className="balance">{formatCurrency(currencyBalance)}</div>;

//}
//export default BalanceDisplay;

//---------------------------------------------------------------------------------------------------

// we are using old way for connect react to redux  before useConnect hook
function BalanceDisplay({ balance }) {
  return <div className="balance">{formatCurrency(balance)}</div>;
}
function mapStateToProps(state) {
  return {
    balance: state.account.balance,
  };
}
export default connect(mapStateToProps)(BalanceDisplay);

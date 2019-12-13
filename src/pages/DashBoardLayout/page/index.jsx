/* eslint-disable jsx-a11y/anchor-is-valid */
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { changeUsername, changePassword, sendLogin, logout } from "../../Login/redux/action";
import { getError, getIsLogin, getUser, getSendingLogin } from "../../Login/redux/selector";
import Dashboard from "./Dashboard";

const mapStateToProps = state => ({
  isLogin: getIsLogin(state),
  error: getError(state),
  user: getUser(state),
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      sendLogin,
      logout,
    },
    dispatch,
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Dashboard);

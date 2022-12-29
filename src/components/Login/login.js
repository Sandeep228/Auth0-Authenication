import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "../../styles/login.scss";
import { useDispatch } from "react-redux";
import { token } from "../../core/features/userSlice";

const LoginButton = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();
  const dispatch = useDispatch();
  const onClickHandler = () => {
    loginWithRedirect();
    if (isAuthenticated) {
      dispatch(token);
    }
  };
  return (
    <button className="btn-login" onClick={onClickHandler}>
      Log In
    </button>
  );
};

export default LoginButton;

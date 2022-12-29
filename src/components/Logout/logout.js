import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

import "../../styles/login.scss";

const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <button className="btn-logout" onClick={() => logout()}>
      Log Out
    </button>
  );
};

export default LogoutButton;

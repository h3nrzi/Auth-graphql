import React from "react";
import { Link } from "react-router";

const AuthButtons = ({ user, onLogout }) => {
  if (user) {
    return (
      <li>
        <a onClick={onLogout}>Logout</a>
      </li>
    );
  }

  return (
    <div>
      <li>
        <Link to="/register" onlyActiveOnIndex>
          Sign up
        </Link>
      </li>
      <li>
        <Link to="/login" onlyActiveOnIndex>
          Login
        </Link>
      </li>
    </div>
  );
};

export default AuthButtons;

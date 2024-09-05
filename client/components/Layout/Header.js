import React from "react";
import { Link } from "react-router";
import { graphql } from "react-apollo";
import { user } from "../../api/queries";
import AuthButtons from "../AuthButtons";
import { logout } from "../../api/mutations";

const Header = ({ data, mutate }) => {
  const handleLogout = () => {
    mutate({
      refetchQueries: [{ query: user }]
    });
  };

  return (
    <nav>
      <div className="nav-wrapper">
        <Link to="/" onlyActiveOnIndex className="brand-logo left">
          <i>AuthGQL</i>
        </Link>
        <ul className="right">
          {data.loading ? <div>Loading...</div> : <AuthButtons user={data.user} onLogout={handleLogout} />}
        </ul>
      </div>
    </nav>
  );
};

export default graphql(logout, {
  name: "mutate"
})(
  graphql(user, {
    name: "data"
  })(Header)
);

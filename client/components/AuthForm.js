import React from "react";
import { withState } from "recompose";

const AuthForm = ({ state, setState, btnLabel, onSubmit, errors }) => {
  const { email, password } = state;

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(email, password);
  };

  return (
    <div className="row">
      <form className="col s6" onSubmit={handleSubmit}>
        <div className="input-field">
          <input
            placeholder="Email"
            value={state.email}
            onChange={(e) => setState({ password, email: e.target.value })}
          />
        </div>
        <div className="input-field">
          <input
            placeholder="Password"
            value={state.password}
            onChange={(e) => setState({ email, password: e.target.value })}
          />
        </div>
        {errors.length > 0 &&
          errors.map((error, i) => (
            <p key={i} className="red-text">
              {error}
            </p>
          ))}
        <button type="submit" className="btn">
          {btnLabel}
        </button>
      </form>
    </div>
  );
};

const enhance = withState("state", "setState", { email: "", password: "" });
export default enhance(AuthForm);

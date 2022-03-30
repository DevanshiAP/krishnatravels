import React from "react";
import { loginPageStyle } from "../constant/styles";

export default function Login() {
  const onUserNameChangeHandler = (e) => {
    console.log(e.target.value);
  };

  const onPasswordChangeHandler = (e) => {
    console.log(e.target.value);
  };
  return (
    <div style={loginPageStyle}>
      <div>
        <label>Username </label>
        <input
          type="text"
          name="uname"
          required
          onChange={onUserNameChangeHandler}
        />
      </div>
      <div>
        <label>Password </label>
        <input
          type="password"
          name="pass"
          required
          onChange={onPasswordChangeHandler}
        />
      </div>
      <div>
        <input type="submit" />
      </div>
    </div>
  );
}

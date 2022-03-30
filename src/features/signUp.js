import React from "react";

export default function SignUp() {
  const onUserNameChangeHandler = (e) => {
    console.log(e.target.value);
  };

  const onPasswordChangeHandler = (e) => {
    console.log(e.target.value);
  };
  return (
    <div>
      <form>
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
          <label>Email </label>
          <input
            type="text"
            name="email"
            required
            onChange={onEmailChangeHandler}
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
          <label> Confirm Password </label>
          <input
            type="password"
            name="cpass"
            required
            onChange={onConfPasswordChangeHandler}
          />
        </div>
        <div>
          <input type="submit" />
        </div>
      </form>
    </div>
  );
}

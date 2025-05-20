import { useRef, useState } from "react";

export default function Login() {
  const email = useRef("");
  const password = useRef("");

  function handleSubmit(event) {
    event.preventDefault();
    console.log(email.current.value, password.current.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            ref={email}
            value={email.current.value}
            type="email"
            name="email"
            onChange={(event) => (email.current.value = event.target.value)}
          />
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            ref={password}
            type="password"
            name="password"
            value={password.current.value}
            onChange={(event) => (password.current.value = event.target.value)}
          />
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button" type="submit">
          Login
        </button>
      </p>
    </form>
  );
}

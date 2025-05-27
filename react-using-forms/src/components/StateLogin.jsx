import { useState } from "react";
import Input from "./Input";

export default function Login() {
  // const [enteredEmail, setEnteredEmail] = useState("");
  // const [enteredPassword, setEnteredPassword] = useState("");

  const [enteredValues, setEnteredValues] = useState({
    email: "",
    password: "",
  });

  const [didEdit, setDidEdit] = useState({
    email: false,
    password: false,
  });

  const emailIsInvalid = didEdit.email && !enteredValues.email.includes("@");
  const passwordIsInvalid =
    didEdit.password && enteredValues.password.trim().length < 6;

  //for keystrokes validation use useState to control the input fields
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    console.log(data);
  }

  // function handleEmailChange(event) {
  //   setEnteredEmail(event.target.value);
  // }

  // function handlePasswordChange(event) {
  //   setEnteredPassword(event.target.value);
  // }

  function handleInputChange(identifier, event) {
    setEnteredValues({
      ...enteredValues,
      [identifier]: event.target.value,
    });

    setDidEdit((prev) => ({
      ...prev,
      [identifier]: false,
    }));
  }

  function handleInputBlur(identifier) {
    setDidEdit((prev) => ({
      ...prev,
      [identifier]: true,
    }));
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <Input
          label="Email"
          id="email"
          type="email"
          name="email"
          error={emailIsInvalid && "Please enter a valid email address"}
          value={enteredValues.email}
          onBlur={() => handleInputBlur("email")}
          onChange={(event) => handleInputChange("email", event)}
        />

        <Input
          label="Password"
          id="password"
          type="password"
          name="password"
          value={enteredValues.password}
          onBlur={() => handleInputBlur("password")}
          onChange={(event) => handleInputChange("password", event)}
          error={
            passwordIsInvalid && "Password must be at least 6 characters long"
          }
        />
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

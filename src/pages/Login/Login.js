import React, { useState } from "react";
import "./Login.css";
import colors from "../../services/colors.js";
import InputField from "../../components/InputField/InputField.js";
import { userLogin } from "../../services/requests.js";
import { useHistory } from "react-router-dom";

function Login({ darkModeOn, addUserToken }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [requesting, setRequesting] = useState(false);
  const [error, setError] = useState(null);
  const history = useHistory();
  function login() {
    setRequesting(true);
    userLogin(email, password).then((res) => {
      if (res.data.error) {
        setError(res.data.error);
      } else {
        setError(null);
        addUserToken(res.data.token);
      }
      setRequesting(false);
    });
  }
  function handleEmailChange(e) {
    setEmail(e.target.value);
  }
  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }
  return (
    <div className="loginContainer">
      <div
        className="loginBox"
        style={{ backgroundColor: colors.getSecondaryBackground(darkModeOn) }}
      >
        <span
          style={{ color: colors.getTextColor(darkModeOn), fontWeight: "bold" }}
        >
          Login
        </span>
        {requesting ? (
          <span style={{ color: colors.getAccentColor, fontSize: "16px" }}>
            Trying to sign in...
          </span>
        ) : error ? (
          <span style={{ color: colors.getWarningColor, fontSize: "16px" }}>
            {error}
          </span>
        ) : null}
        <InputField
          placeholder="Email ID"
          type="email"
          darkModeOn={darkModeOn}
          onChange={handleEmailChange}
          value={email}
        />
        <InputField
          placeholder="Password"
          type="password"
          darkModeOn={darkModeOn}
          onChange={handlePasswordChange}
          value={password}
        />
        <button
          className="loginButton"
          style={{ backgroundColor: colors.getAccentColor }}
          onClick={login}
          disabled={requesting}
        >
          LOGIN
        </button>
        <span
          style={{
            textDecoration: "underline",
            color: "#6889FF",
            fontSize: "16px",
            cursor: "pointer",
          }}
          href="/signup"
        >
          Forgot your password?
        </span>
        <span
          style={{ color: colors.getTextColor(darkModeOn), fontSize: "16px" }}
        >
          Do not have an account?{" "}
          <span
            style={{
              textDecoration: "underline",
              color: "#6889FF",
              fontSize: "16px",
              cursor: "pointer",
            }}
            onClick={() => history.push("/signup")}
            href="/signup"
          >
            Signup now.
          </span>
        </span>
        {/* <span style={{ fontSize: "16px", color: colors.getPlaceholderColor }}>
          -----------or-----------
        </span> */}
      </div>
    </div>
  );
}

export default Login;

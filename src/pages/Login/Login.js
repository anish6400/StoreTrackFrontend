import React from "react";
import Navbar from "../../components/Navbar/Navbar.js";
import Titlebar from "../../components/Titlebar/Titlebar.js";
import "./Login.css";
import colors from "../../colors.js";
import InputField from "../../components/InputField/InputField.js";

function Login({
  navbarOpened,
  darkModeOn,
  toggleNavbar,
  toggleDarkMode,
  userToken,
}) {
  //   const itemsData = [
  //     {
  //       text: "Login",
  //       icon: null,
  //       onClick: null
  //     },
  //     {
  //       text: "Sign Up",
  //       icon: null,
  //       onClick: null
  //     },
  //     {
  //       text: "Demo",
  //       icon: null,
  //       onClick: null
  //     },
  //     {
  //       text: "Dark Mode",
  //       icon: null,
  //       onClick: props.toggleDarkMode
  //     },
  //   ];
  return (
    <div className="loginContainer">
      <Titlebar
        title="WORK STRUCTURE"
        navbarOpened={navbarOpened}
        darkModeOn={darkModeOn}
        toggleNavbar={toggleNavbar}
      />
      <div style={{ display: "flex", flexDirection: "row", flex: 1 }}>
        <Navbar
          darkModeOn={darkModeOn}
          toggleDarkMode={toggleDarkMode}
          userToken={userToken}
        />
        {/* <Navbar itemsData={itemsData} darkModeOn={darkModeOn} />
        <div
          className="loginContentContainer"
          style={
            darkModeOn
              ? {
                  backgroundColor: colors.dark.primaryBackground,
                }
              : {
                  backgroundColor: colors.light.primaryBackground,
                }
          }
        >
          <div
            className="loginBox"
            style={
              darkModeOn
                ? {
                    backgroundColor: colors.dark.secondaryBackground,
                  }
                : {
                    backgroundColor: colors.light.secondaryBackground,
                  }
            }
          >
              <span style={
              darkModeOn
                ? {
                    color: colors.dark.text,
                  }
                : {
                    color: colors.light.text,
                  }
            }>Login</span>
              <InputField placeholder="Email ID" type="text" darkModeOn={darkModeOn}/>
              <InputField placeholder="Password" type="password" darkModeOn={darkModeOn}/>
              <button className="loginButton" style={{backgroundColor: colors.accent}}>LOGIN</button>
              <a style={{color: "#6889FF", fontSize: "16px"}} href="#">Forgot your password?</a>
              <span style={
              darkModeOn
                ? {
                    color: colors.dark.text,
                    fontSize:"16px"
                  }
                : {
                    color: colors.light.text,
                    fontSize:"16px"
                  }
            }>Do not have an account? <a style={{color: "#6889FF", fontSize: "16px"}} href="#">Signup now.</a></span>
            {/* <span style={{fontSize: "16px", color: colors.placeholder}}>-----------or-----------</span> */}
        {/* </div>
        </div> */}
      </div>
    </div>
  );
}

export default Login;

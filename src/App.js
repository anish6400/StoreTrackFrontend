import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Login from "./pages/Login/Login.js";
import Signup from "./pages/signup.js";
import "./App.css";
import colors from "./colors.js";
import { TokenValid } from "./utils.js";

function App() {
  const [userToken, setUserToken] = useState(
    TokenValid(localStorage.getItem("userToken"))
      ? localStorage.getItem("userToken")
      : null
  );
  const [darkModeOn, setDarkMode] = useState(
    localStorage.getItem("darkModeOn")
  );
  const [navbarOpened, setNavbarOpened] = useState(
    localStorage.getItem("navBarOpened")
  );

  function toggleDarkMode() {
    setDarkMode(!darkModeOn);
    localStorage.setItem("darkModeOn", darkModeOn);
  }
  function toggleNavbar() {
    setNavbarOpened(!navbarOpened);
    localStorage.setItem("navBarOpened", navbarOpened);
  }
  return (
    <div
      className="App"
      style={{ backgroundColor: colors.getPrimaryBackground(darkModeOn) }}
    >
      <Router>
        <Switch>
          <Route
            exact
            path="/login"
            component={() => (
              <Login
                darkModeOn={darkModeOn}
                navbarOpened={navbarOpened}
                toggleNavbar={toggleNavbar}
                toggleDarkMode={toggleDarkMode}
                userToken={userToken}
              />
            )}
          />
          <Route exact path="/signup" component={Signup} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

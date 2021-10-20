import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

// components
import Header from "./components/Header/Header.js";
import Navbar from "./components/Navbar/Navbar.js";
// pagess
import Login from "./pages/Login/Login.js";
import Signup from "./pages/Signup/Signup.js";
// services
import colors from "./services/colors.js";

function App() {
  // constants
  const appName = "Store track";

  // state
  const [userToken, setUserToken] = useState(null);
  const [darkModeOn, setDarkMode] = useState(
    JSON.parse(window.localStorage.getItem("darkModeOn"))
  );
  const [navbarOpened, setNavbarOpened] = useState(
    JSON.parse(window.localStorage.getItem("navbarOpened"))
  );

  // functions

  function addUserToken(token) {
    window.localStorage.setItem("userToken", JSON.stringify(token));
    setUserToken(token);
  }

  function toggleDarkMode() {
    window.localStorage.setItem("darkModeOn", JSON.stringify(!darkModeOn));
    setDarkMode(!darkModeOn);
  }
  function toggleNavbar() {
    window.localStorage.setItem("navbarOpened", JSON.stringify(!navbarOpened));
    setNavbarOpened(!navbarOpened);
  }

  return (
    <div
      className="App"
      style={{ backgroundColor: colors.getPrimaryBackground(darkModeOn) }}
    >
      <div className="headerParent">
        <Header
          title={appName}
          darkModeOn={darkModeOn}
          navbarOpened={navbarOpened}
          toggleNavbar={toggleNavbar}
        />
      </div>
      <div className="bottomParent">
        <Navbar
          userToken={userToken}
          darkModeOn={darkModeOn}
          toggleDarkMode={toggleDarkMode}
          navbarOpened={navbarOpened}
        />
        <div className="contentParent">
          <Router>
            <Switch>
              <Route path="/login">
                <Login darkModeOn={darkModeOn} addUserToken={addUserToken} />
              </Route>
              <Route path="/signup">
                <Signup darkModeOn={darkModeOn} addUserToken={addUserToken} />
              </Route>
            </Switch>
          </Router>
        </div>
      </div>
    </div>
  );
}

export default App;

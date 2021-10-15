import React, { useState } from "react";
import "./Navbar.css";
import colors from "../../colors.js";
import { faToggleOff, faToggleOn } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Navbar({ userToken, darkModeOn, toggleDarkMode }) {
  const navItems = userToken
    ? []
    : [
        {
          data: "Login",
          icon: null,
          onClick: null,
        },
        {
          data: "Signup",
          icon: null,
          onClick: null,
        },
        {
          data: "Demo",
          icon: null,
          onClick: null,
        },
        {
          data: "Dark Mode",
          icon: darkModeOn ? faToggleOn : faToggleOff,
          onClick: toggleDarkMode,
        },
      ];
  console.log(navItems);
  return (
    <div
      className="navBarContainer"
      style={{ backgroundColor: colors.getSecondaryBackground(darkModeOn) }}
    >
      {navItems.map((itemData) => (
        <NavItem
          data={itemData.data}
          icon={itemData.icon}
          darkModeOn={darkModeOn}
          onClick={itemData.onClick}
          key={itemData.data}
        />
      ))}
    </div>
  );
}

function NavItem({ data, icon, onClick, darkModeOn }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      className="navItemContainer"
      style={
        hovered
          ? {
              backgroundColor: colors.getAccentColor,
              borderColor: colors.getAccentColor,
            }
          : {
              backgroundColor: colors.getSecondaryBackground(darkModeOn),
              borderColor: colors.getPrimaryBackground(darkModeOn),
            }
      }
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={onClick}
    >
      <span
        className="navItemData"
        style={
          hovered
            ? { color: colors.getTextColor(true) }
            : { color: colors.getTextColor(darkModeOn) }
        }
      >
        {data}
      </span>
      <FontAwesomeIcon
        icon={icon}
        color={colors.getTextColor(darkModeOn)}
        size="lg"
      />
    </div>
  );
}

export default Navbar;

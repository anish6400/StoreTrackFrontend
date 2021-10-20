import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

import "./Header.css";
import colors from "../../services/colors.js";

function Header({ title, darkModeOn, navbarOpened, toggleNavbar }) {
  return (
    <div
      className="headerContainer"
      style={{
        backgroundColor: colors.getSecondaryBackground(darkModeOn),
        borderColor: colors.getPrimaryBackground(darkModeOn),
      }}
    >
      <FontAwesomeIcon
        icon={navbarOpened ? faTimes : faBars}
        color={colors.getTextColor(darkModeOn)}
        onClick={toggleNavbar}
        cursor="pointer"
        size="2x"
        style={{ position: "absolute", left: "20px" }}
      />
      <span
        className="headerData noselect"
        style={{ color: colors.getTextColor(darkModeOn) }}
      >
        {title}
      </span>
    </div>
  );
}

export default Header;

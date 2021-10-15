import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

import "./Titlebar.css";
import colors from "../../colors.js";

function Titlebar({ title, darkModeOn, navbarOpened, toggleNavbar }) {
  return (
    <div
      className="titleBarContainer"
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
        className="titleBarData noselect"
        style={{ color: colors.getTextColor(darkModeOn) }}
      >
        {title}
      </span>
    </div>
  );
}

export default Titlebar;

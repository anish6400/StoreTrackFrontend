const colors = {
  getTextColor: function (darkModeOn) {
    return darkModeOn ? "#FFFFFF" : "#333333";
  },
  getPrimaryBackground: function (darkModeOn) {
    return darkModeOn ? "#121212" : "#E5EBEB";
  },
  getSecondaryBackground: function (darkModeOn) {
    return darkModeOn ? "#222327" : "#FFFFFF";
  },
  getAccentColor: "#9A56F0",
  getWarningColor: "#FF3131",
  getPlaceholderColor: "#828282",
};

export default colors;

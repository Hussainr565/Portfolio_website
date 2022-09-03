import React, { useContext } from "react";
import ToggleIcon from "material-ui-toggle-icon";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import themeContext from "../../contexts/themeContext";
import IconButton from "@material-ui/core/IconButton";

const ToggleIconButton = (props) => {
  const { theme, setTheme } = useContext(themeContext);
  return (
    <IconButton onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
      <ToggleIcon
        style={{ color: props.color }}
        on={theme === "light" ? true : false}
        onIcon={<DarkModeIcon />}
        offIcon={<LightModeIcon />}
      />
    </IconButton>
  );
};

export default ToggleIconButton;

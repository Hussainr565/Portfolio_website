import React, {useContext} from 'react';
import DownloadIcon from '@mui/icons-material/Download';
import {
    NavButton
} from './ButtonElement';
import themeContext from '../../contexts/themeContext';

export default function IconLabelButtons(props) {
    const { theme, setTheme } = useContext(themeContext);
  return (
      <NavButton onClick={() => setTheme(theme === "light" ? "dark" : "light")} style={{backgroundColor: props.color}} variant="contained" endIcon={<DownloadIcon />}>
        Download CV
      </NavButton>
  );
}
import React from 'react';
import DownloadIcon from '@mui/icons-material/Download';
import {
    NavButton
} from './ButtonElement';

export default function IconLabelButtons(props) {  
  return (
      <NavButton style={{backgroundColor: props.color}} variant="contained" endIcon={<DownloadIcon />}>
        {props.text}
      </NavButton>
  );
}
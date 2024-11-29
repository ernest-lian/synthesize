import { 
  Box
} from '@material-ui/core';

import '../styling/window.css';

import Navigation from './navigation';
import Remix from './remix/stemRemix';

import {
  Routes,
  Route,
} from "react-router-dom";

const Window = () => {

  return(
    <Box
      id='application-wrapper'
      display='flex'
      justifyContent='center'
      alignItems='center'
    >
      <Remix/>
    </Box>
    )
}

export default Window;
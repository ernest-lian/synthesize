import { 
  Box
} from '@material-ui/core';

import '../styling/window.css';

import Navigation from './navigation';
import Home from './home';
import Remix from './remix';
import Library from './library';
import CurrentlyPlaying from './currentlyPlaying';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

const Window = ({
    
}) => {

  return(
    <Box
      id="window"
    >
      <Box>
        <CurrentlyPlaying/>
        <Navigation/>
      </Box>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Routes>
          <Route path="/home" element={<Home />} />
        </Routes>
        <Routes>
          <Route path="/remix" element={<Remix />} />
        </Routes>
        <Routes>
          <Route path="/library" element={<Library />} />
        </Routes>

    </Box>
    )
}

export default Window;

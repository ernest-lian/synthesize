import { 
  Box
} from '@material-ui/core';

import '../styling/window.css';

import Navigation from './navigation';
import Remix from './remix/stemRemix';
import Library from './library/library';
import CurrentlyPlayingMobile from './currentlyPlayingMobile';

import {
  Routes,
  Route,
} from "react-router-dom";

const Window = () => {

  return(
    <Box
      id='window-container'
    >
      <Box
        id="window"
      >
        <Routes>
          <Route path="/" element={<Remix />} />
        </Routes>
        <Routes>
          <Route path="/remix" element={<Remix />} />
        </Routes>
        <Routes>
          <Route path="/library" element={<Library />} />
        </Routes>
      </Box>
      <Box
        id='playing-and-navigation-container'
      >
        <Navigation/>
      </Box>
    </Box>
    )
}

export default Window;

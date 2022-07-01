import  { useState } from 'react';
import { Box, Typography } from '@material-ui/core';
import PauseIcon from '@mui/icons-material/Pause';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

import '../styling/currentlyPlaying.css';


import Ctrl from '../ctrl.jpg';

const CurrentlyPlaying = () => {
  const [playing, setPlaying] = useState(false);

  const handleSetPlaying = () => {
    console.log(!playing!)
    setPlaying(!playing)
  };


  return(
    <Box
      id='currently-playing'
    >
      <Box
        display='flex'
        flexDirection='row'
      >
        <img
            id='currently-playing-cover-art'
            src={Ctrl}
            alt="Cover art of currently playing track"
          />
        <Box
          display='flex'
          flexDirection='column'
          alignSelf='center'
          pl={1}
          textAlign='left'
        >
          <Typography id='title'>better off</Typography>
          <Typography id='artist'>Ariana Grande</Typography>
        </Box>
      </Box>
      {playing ? <PlayArrowIcon onClick = {() => handleSetPlaying()} style={{ 'alignSelf': 'center', color: '#1DB954'}}/> : <PauseIcon onClick = {() => handleSetPlaying()} style={{ 'alignSelf': 'center', color: '#1DB954'}}/>}
    </Box>
    )
}

export default CurrentlyPlaying;

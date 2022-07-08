import  { useState } from 'react';
import { Box, Typography, Slider } from '@material-ui/core';

import PauseIcon from '@mui/icons-material/Pause';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import ReplayIcon from '@mui/icons-material/Replay';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';

import '../styling/currentlyPlayingDesktop.css';


import Ctrl from '../ctrl.jpg';


const CurrentlyPlayingDesktop = () => {
  const [playing, setPlaying] = useState(false);

  const handleSetPlaying = () => {
    setPlaying(!playing)
  };


  return(
    <Box
      id='currently-playing-desktop'
    >

      <Box
        display='flex'
        flexDirection='row'
      >
        <Box
          id='currently-playing-desktop-song-information'
        >
          <img
            id='currently-playing-desktop-cover-art'
            src={Ctrl}
            alt='Covert art of track'
          />
        </Box>
        <Box
          display='flex'
          flexDirection='column'
          alignSelf='center'
          paddingLeft='10px'
          textAlign='left'
        >
          <Typography id='currently-playing-desktop-title'> 456</Typography>
          <Typography id='currently-playing-desktop-artist'>123</Typography>
        </Box>
      </Box>


      <Box
        id='play-icons'
      >

        <ShuffleIcon id='shuffle-icon' />
        <SkipPreviousIcon id='skip-previous-icon' />

        {playing ? <PlayArrowIcon id='play-arrow-icon' onClick = {() => handleSetPlaying()} /> : <PauseIcon id='pause-icon' onClick = {() => handleSetPlaying()} />}
        
        <SkipNextIcon id='skip-next-icon' />    
        <ReplayIcon id='replay-icon' />
        
      </Box>
      <Box
        id='volume-icons'
      >
        <VolumeUpIcon id='volume-icon'/>

        <Box
          id='volume-level'
        >
          <Slider value={100} aria-label="Volume" valueLabelDisplay="auto" style={{ marginRight: '30px', color: '#1DB954' }}/>
        </Box>
      </Box>
    </Box>
    )
}

export default CurrentlyPlayingDesktop;

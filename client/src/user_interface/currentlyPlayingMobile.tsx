import  { useState } from 'react';
import { Box, Typography } from '@material-ui/core';
import PauseIcon from '@mui/icons-material/Pause';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

import '../styling/currentlyPlayingMobile.css';


import Ctrl from '../ctrl.jpg';

import drive from './test_drive.mp3';


const CurrentlyPlayingMobile = () => {
  const [playing, setPlaying] = useState(false);

  const [volume, setVolume] = useState(50);


  const handleSetPlaying = () => {
    console.log('mobile set playing');
    setPlaying(!playing)
    var music = new Audio(drive);
    music.play();
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

export default CurrentlyPlayingMobile;

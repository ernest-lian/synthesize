import  { useState } from 'react';
import { Box, Typography } from '@material-ui/core';
import PauseIcon from '@mui/icons-material/Pause';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

import '../styling/currentlyPlayingMobile.css';


import Ctrl from '../ctrl.jpg';


const CurrentlyPlayingMobile = () => {
  const [playing, setPlaying] = useState(false);

  const handleSetPlaying = () => {
    // console.log(localStorage.getItem('remixName'));

    // var audio = new Audio('../../output/test_drive/other.wav');
    // audio.crossOrigin = 'anonymous';

    // console.log(audio);

    // audio.play();

    // audio.addEventListener("canplay", function() {
    //   console.log('aespa');
    //   var audioPromise = audio.play();

    //   if (audioPromise !== undefined) {
    //     audioPromise.then(function() {
    //       console.log("Play suceess");
    //     }).catch(function(error) {
    //       console.log("Play failed");
    //     });
    //   }
    // })


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

export default CurrentlyPlayingMobile;

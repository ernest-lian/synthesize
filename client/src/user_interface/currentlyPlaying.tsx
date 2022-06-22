import  { useState } from 'react';
import { Box, Typography } from '@material-ui/core';
import PauseIcon from '@mui/icons-material/Pause';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

import '../styling/currentlyPlaying.css';


const CurrentlyPlaying = () => {
  const [playing, setPlaying] = useState(false);

  const handleSetPlaying = () => setPlaying(!playing);


  return(
    <Box
      id='currently-playing'
    >
      <Box
      
      >
        <Box
          id='playing-cover-art'
          component="img"
        />
        <Box
          display='flex'
          flexDirection='column'
          textAlign='left'
        >
          <Typography id='title'>Title</Typography>
          <Typography id='artist'>Artist</Typography>
        </Box>
      </Box>
      {playing ? <PlayArrowIcon onClick = {() => handleSetPlaying} style={{ color: '#1DB954'}}/> : <PauseIcon onClick = {() => handleSetPlaying} style={{ 'alignSelf': 'center', color: '#1DB954'}}/>}
    </Box>
    )
}

export default CurrentlyPlaying;

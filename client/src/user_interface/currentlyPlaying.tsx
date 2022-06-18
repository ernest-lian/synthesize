import { Box, Typography } from '@material-ui/core';
import PauseIcon from '@mui/icons-material/Pause';

import '../styling/currentlyPlaying.css';


const CurrentlyPlaying = () => {
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
          <Typography >Title</Typography>
          <Typography >Artist</Typography>
        </Box>
      </Box>
      <PauseIcon style={{ 'alignSelf': 'center'}}/>
    </Box>
    )
}

export default CurrentlyPlaying;

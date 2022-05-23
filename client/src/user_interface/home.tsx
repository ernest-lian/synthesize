import { Box } from '@material-ui/core';
import { Typography } from '@mui/material';

import PlaylistPreview from './playlistPreview';
import '../styling/home.css';

const Home = () => {

  return(
    <Box
      id='home-window'
    >
      <Box
        id='home'
      >
        <Typography id='user-name'>Hello</Typography>
        <Box
          id='playlist-preview-container'
        >
          <PlaylistPreview></PlaylistPreview>
          <PlaylistPreview></PlaylistPreview>
          <PlaylistPreview></PlaylistPreview>
          <PlaylistPreview></PlaylistPreview>
        </Box>
      </Box>
    </Box>
    )
}

export default Home;

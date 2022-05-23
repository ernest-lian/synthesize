import { Box } from '@material-ui/core';
import { Typography } from '@mui/material';
import React from 'react';

import PlayCircleIcon from '@mui/icons-material/PlayCircle';

import Ariana from '../images/ariana.jpg';

import '../styling/playlistPreview.css';

const PlaylistPreview = ({
    
}) => {

  return(
    <Box
      id='playlist-container'
    >
      <Box
        id='playlist-image'
        component='img'
      />
      <Box
        id='playlist-information'
      >
        <Box>
          <Typography id='playlist'>Playlist</Typography>
          <Typography id='playlist-name'>Playlist Name</Typography>
        </Box>
        <PlayCircleIcon sx={{ color: "#1DB954" }}/>
      </Box>
    </Box>
    )
}

export default PlaylistPreview;

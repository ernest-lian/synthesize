import React, { FunctionComponent, ReactElement } from 'react';
import { 
  Box,
  Button,
  Typography
} from '@material-ui/core';


import '../styling/remixPlaying.css';

type RemixPlayingProps = {
  cover: string
}

const RemixPlaying: FunctionComponent<RemixPlayingProps> = (props): ReactElement => {  
  return(
    <Box
      id='remix-playing'
    >
      <img
        style={{ borderRadius: '10px'}}
        src={props.cover}
      />
      <Box
        id='remix-information'
      >
        <Typography id='remix-playing-title'>test drive</Typography>
        <Typography id='remix-playing-artist'>Ariana Grande</Typography>
        <Typography id='remix-playing-time'>2min 02 secs</Typography>
      <Box
        id='remix-creator'
      >
        <img
          style={{ borderRadius: '20px', height: '20px', width: '20px'}}
          src={props.cover}
        />
        <Typography id='remix-playing-creator'>ernest</Typography>
      </Box>
      </Box>
    </Box>
    )
}

export default RemixPlaying;

import React, { FunctionComponent, ReactElement } from 'react';
import { 
  Box,
  Typography
} from '@material-ui/core';

import '../styling/remixComponent.css';

type RemixComponentProps = {
  number: number,
  cover: string,
  title: string,
  artist: string
}


const RemixComponent: FunctionComponent<RemixComponentProps> = (props): ReactElement => {  
  return(
    <Box
      id='remix-component'
    >
      <Box
        id='song-information'
      >
        <Box
          display='flex'
          flexDirection='row'
        >
          <Typography id='number'>{props.number}</Typography>
          <Typography>{props.cover}</Typography>
        </Box>
        <Box
          id='remix-title-artist'
        >
          <Typography id='title'>{props.title} </Typography>
          <Typography id='artist'>{props.artist}</Typography>
        </Box>
      </Box>
      <Box
        id="dots"
      >
        <span className="dot"></span>
        <span className="dot"></span>
        <span className="dot"></span>
      </Box>
    </Box>
    )
}


export default RemixComponent;

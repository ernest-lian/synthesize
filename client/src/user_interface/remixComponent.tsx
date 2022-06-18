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
          id='remix-number-cover'
        >
          <Typography id='number'>{props.number}</Typography>
          <Box
            id='song-cover-art'
            component="img"
            src={props.cover}
          />
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

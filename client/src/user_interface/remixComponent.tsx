import React, { FunctionComponent, ReactElement } from 'react';
import { 
  Box
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
        display='flex'
        flexDirection='row'
      >
        {props.number}
        {props.cover}
      </Box>
      <Box
        id='remix-title-artist'
      >
        {props.title} 
        {props.artist}
      </Box>
    </Box>
    )
}

export default RemixComponent;

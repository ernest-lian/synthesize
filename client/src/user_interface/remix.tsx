import { 
  Box,
  Button,
  Typography
} from '@material-ui/core';

import '../styling/remix.css';

import RemixComponent from './remixComponent';

const Remix = () => {  
  return(
    <Box
      id='remix-window'
    >
      <Typography id='remixes'>Remixes</Typography>
      <Box
        id='remix-container'
      >
        <RemixComponent 
          number={1} cover="Cover" title="Title" artist="Artist"
        />
        <RemixComponent 
          number={2} cover="Cover" title="Title" artist="Artist"
        />
        <RemixComponent 
          number={3} cover="Cover" title="Title" artist="Artist"
        />
      </Box>
    </Box>
    )
}

export default Remix;

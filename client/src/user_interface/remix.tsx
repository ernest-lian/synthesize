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
      <RemixComponent 
        number={1} cover="Cover" title="Title" artist="Artist"
      />
    </Box>
    )
}

export default Remix;

import { 
  Box,
  Typography
} from '@material-ui/core';

import '../../styling/library.css';

import RemixComponent from './remixComponent';

import Ctrl from '../test_drive.png';

const Library = () => {  
  return(
    <Box
      id='library-window'
    >
      <Typography id='remixes-navigation'> Remixes </Typography>
      <Typography id='remixes'>Remixes</Typography>
      <Box
        id='remix-container'
      >
        <RemixComponent 
          number={1} cover={Ctrl} title="test drive" artist="Ariana Grande"
        />
      </Box>
    </Box>
    )
}

export default Library;

import { 
  Box,
  Button,
  Typography
} from '@material-ui/core';

import '../styling/remix.css';

import RemixComponent from './remixComponent';

import Ctrl from '../ctrl.jpg';

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
          number={1} cover={Ctrl} title="The Weekend" artist="Sza"
        />
        <RemixComponent 
          number={2} cover={Ctrl} title="Life's Too Short" artist="Tinashe"
        />
        <RemixComponent 
          number={3} cover={Ctrl} title="STUD" artist="Troye Sivan"
        />
      </Box>
    </Box>
    )
}

export default Remix;

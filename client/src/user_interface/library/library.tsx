import { 
  Box,
  Typography
} from '@material-ui/core';

import '../../styling/library.css';

import RemixComponent from './remixComponent';

import Ctrl from '../../ctrl.jpg';

const Library = () => {  
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
        <RemixComponent 
          number={4} cover={Ctrl} title="STUD" artist="Troye Sivan"
        />
        <RemixComponent 
          number={5} cover={Ctrl} title="STUD" artist="Troye Sivan"
        />
        <RemixComponent 
          number={6} cover={Ctrl} title="STUD" artist="Troye Sivan"
        />
        <RemixComponent 
          number={7} cover={Ctrl} title="STUD" artist="Troye Sivan"
        />
        <RemixComponent 
          number={8} cover={Ctrl} title="STUD" artist="Troye Sivan"
        />
        <RemixComponent 
          number={9} cover={Ctrl} title="STUD" artist="Troye Sivan"
        />
      </Box>
    </Box>
    )
}

export default Library;
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
        <RemixComponent 
          number={10} cover={Ctrl} title="STUD" artist="Troye Sivan"
        />
        <RemixComponent 
          number={11} cover={Ctrl} title="STUD" artist="Troye Sivan"
        />
        <RemixComponent 
          number={12} cover={Ctrl} title="STUD" artist="Troye Sivan"
        />
        <RemixComponent 
          number={13} cover={Ctrl} title="STUD" artist="Troye Sivan"
        />
      </Box>
    </Box>
    )
}

export default Remix;

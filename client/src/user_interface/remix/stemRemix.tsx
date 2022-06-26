import { 
  Box,
  Typography
} from '@material-ui/core';

import Slider from "@mui/material/Slider";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDrum, faMicrophoneLines, faGuitar, faMusic } from '@fortawesome/free-solid-svg-icons'

import '../../styling/stemRemix.css';

import RemixPlaying from './remixPlaying';

import Ctrl from '../../ctrl.jpg';

const stemRemix = () => {  
  return(
    <Box
      id='remix-window'
    >
      <Typography id='stem-remix'>Stem Remix</Typography>
      <RemixPlaying cover={Ctrl}/>
      <Box
        id='sliders'
      >
        <Box
          className='slider'
        >
          <Box
            display='flex'
            flexDirection='column'
            p={2}
          >
            <FontAwesomeIcon icon={faMicrophoneLines} className='icon'/>
            <Typography id='slider-text'>Vocals</Typography>
          </Box>
          <Slider defaultValue={100} aria-label="Default" valueLabelDisplay="auto" style={{ width: '70%', color: '#1DB954' }}/>
        </Box>

        <Box
          className='slider'
        >
          <Box
            display='flex'
            flexDirection='column'
            p={2}
          >
            <FontAwesomeIcon icon={faDrum} className='icon'/>
            <Typography id='slider-text'>Drums</Typography>
          </Box>
          <Slider defaultValue={100} aria-label="Default" valueLabelDisplay="auto" style={{ width: '70%', color: '#1DB954' }}/>
        </Box>  
        
        <Box
          className='slider'
        >
          <Box
            display='flex'
            flexDirection='column'
            p={2}
          >
            <FontAwesomeIcon icon={faGuitar} className='icon'/>
            <Typography id='slider-text'>Bass</Typography>
          </Box>
          <Slider defaultValue={100} aria-label="Default" valueLabelDisplay="auto" style={{ width: '70%', color: '#1DB954' }}/>
        </Box>
        
        <Box
          className='slider'
        >
          <Box
            display='flex'
            flexDirection='column'
            p={2}
          >
            <FontAwesomeIcon icon={faMusic} className='icon'/>
            <Typography id='slider-text'>Other</Typography>
          </Box>
          <Slider defaultValue={100} aria-label="Default" valueLabelDisplay="auto" style={{ width: '70%', color: '#1DB954' }}/>
        </Box>

      </Box>
    </Box>
    )
}

export default stemRemix;

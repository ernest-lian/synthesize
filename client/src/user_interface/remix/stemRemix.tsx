import  { useRef, useState, ChangeEvent } from 'react';
import { 
  Box,
  Typography,
  Button
} from '@material-ui/core';

import Slider from "@mui/material/Slider";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDrum, faMicrophoneLines, faGuitar, faMusic } from '@fortawesome/free-solid-svg-icons'

import '../../styling/stemRemix.css';

import RemixPlaying from './remixPlaying';

import Ctrl from '../../ctrl.jpg';

import vocals from './../vocals.wav';
import bass from './../bass.wav';
import other from './../other.wav';
import drums from './../drums.wav';

const StemRemix = () => {  
  const vocalsRef = useRef(new Audio(vocals));
  const bassRef = useRef(new Audio(bass));
  const otherRef = useRef(new Audio(other));
  const drumsRef = useRef(new Audio(drums));


  const [playing, setPlaying] = useState(false);

  const [vocalsVolume, setVocalsVolume] = useState(0);
  const [bassVolume, setBassVolume] = useState(0);
  const [drumsVolume, setDrumsVolume] = useState(0);
  const [otherVolume, setOtherVolume] = useState(0);


  const handleSetPlaying = () => {
    setPlaying(!playing)

    vocalsRef.current.play();
    bassRef.current.play();
    drumsRef.current.play();
    otherRef.current.play();

  };

  const handleVocalsVolumeChange = (event: Event, newValue: number | number[]) => {
    setVocalsVolume(newValue as number);
    var okay: number = Math.round(newValue as number/100)
    vocalsRef.current.volume = okay
  };

  const handleBassVolumeChange = (event: Event, newValue: number | number[]) => {
    setBassVolume(newValue as number);
    var okay: number = Math.round(newValue as number/100)
    bassRef.current.volume = okay
  };

  const handleDrumsVolumeChange = (event: Event, newValue: number | number[]) => {
    setDrumsVolume(newValue as number);
    var okay: number = Math.round(newValue as number/100)
    drumsRef.current.volume = okay
  };

  const handleOtherVolumeChange = (event: Event, newValue: number | number[]) => {
    setOtherVolume(newValue as number);
    var okay: number = Math.round(newValue as number/100)
    otherRef.current.volume = okay
  };

  return(
    <Box
      id='remix-window'
    >
      <Button onClick={()=> handleSetPlaying()}>hello</Button>
      <Typography id='stem-remix'>Stem Remix</Typography>
      <Box
        id='remix-and-sliders'
      >
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
            <Slider defaultValue={100} aria-label="Default" valueLabelDisplay="auto" style={{ marginRight: '30px', color: '#1DB954' }} onChange={handleVocalsVolumeChange}/>
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
            <Slider defaultValue={100} aria-label="Default" valueLabelDisplay="auto" style={{ marginRight: '30px', color: '#1DB954' }} onChange={handleDrumsVolumeChange}/>
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
            <Slider defaultValue={100} aria-label="Default" valueLabelDisplay="auto" style={{ marginRight: '30px', color: '#1DB954' }} onChange={handleBassVolumeChange}/>
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
            <Slider defaultValue={0} aria-label="Default" valueLabelDisplay="auto" style={{ marginRight: '30px', color: '#1DB954' }} onChange={handleOtherVolumeChange}/>
          </Box>
        </Box>
      </Box>
    </Box>
    )
}

export default StemRemix;

// @ts-nocheck

import  React, { useMemo, useState, ChangeEvent, useEffect } from 'react';
import { 
  Box,
  Typography,
  Button
} from '@material-ui/core';

import Slider from "@mui/material/Slider";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDrum, faMicrophoneLines, faGuitar, faMusic } from '@fortawesome/free-solid-svg-icons'

import '../../styling/stemRemix.css';
import '../../styling/currentlyPlayingMobile.css';

import PauseIcon from '@mui/icons-material/Pause';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

import TestDrive from '../test_drive.png';

import vocals from './../vocals.wav';
import bass from './../bass.wav';
import other from './../other.wav';
import drums from './../drums.wav';



const StemRemix = () => {
  console.log('in stem remix')  
  const [playing, setPlaying] = useState(false);
  
  const handleSetPlaying = () => {
    setPlaying(playing => !playing)
  }

  const audioContext = new AudioContext();
  const otherAudio = new Audio(other);
  const vocalAudio = new Audio(vocals);
  const bassAudio = new Audio(bass);
  const drumsAudio = new Audio(drums);

  const otherGainNode = new GainNode(audioContext, { gain: 0.5});
const otherVolume = document.getElementById("other-volume")!;

const vocalGainNode = new GainNode(audioContext, { gain: 0.5});
const vocalVolume = document.getElementById("vocal-volume")!;

const bassGainNode = new GainNode(audioContext, { gain: 0.5});
const bassVolume = document.getElementById("bass-volume")!;

const drumsGainNode = new GainNode(audioContext, { gain: 0.5});
const drumsVolume = document.getElementById("drums-volume")!;

  async function setupContext() {
    const track = audioContext.createMediaElementSource(otherAudio);
    track.connect(otherGainNode).connect(audioContext.destination)
  
    const vocalTrack = audioContext.createMediaElementSource(vocalAudio);
    vocalTrack.connect(vocalGainNode).connect(audioContext.destination);
  
    const bassTrack = audioContext.createMediaElementSource(bassAudio);
    bassTrack.connect(bassGainNode).connect(audioContext.destination);
  
    const drumsTrack = audioContext.createMediaElementSource(drumsAudio);
    drumsTrack.connect(drumsGainNode).connect(audioContext.destination);
  }
  
  async function setupEventListeners(){
    otherVolume?.addEventListener('input', event => {
      const element = event.target as HTMLInputElement
      otherGainNode.gain.value = parseFloat(element.value)
    })
  
    vocalVolume?.addEventListener('input', event => {
      const element = event.target as HTMLInputElement
      vocalGainNode.gain.value = parseFloat(element.value)
    })
  
    bassVolume?.addEventListener('input', event => {
      const element = event.target as HTMLInputElement
      bassGainNode.gain.value = parseFloat(element.value)
    })
  
    drumsVolume?.addEventListener('input', event => {
      const element = event.target as HTMLInputElement
      drumsGainNode.gain.value = parseFloat(element.value)
    })
  }


    useEffect(() => {
      console.log(playing)

      playing ? vocalAudio.play() : vocalAudio.pause();
      playing ? bassAudio.play() : bassAudio.pause();
      playing ? drumsAudio.play() : drumsAudio.pause();
      playing ? otherAudio.play() : otherAudio.pause();

      vocalAudio.addEventListener('ended', () => setPlaying(false));

      return () => {
        vocalAudio.removeEventListener('ended', () => setPlaying(false));
      };
    }, [playing]);

    setupEventListeners()
    setupContext()

  return(
    <Box
      id='remix-window'
    >
      <Typography id='stem-remix'>Remix</Typography>
      <Box
        id='remix-and-sliders'
      >
        <Box
          id='remix-playing'
        >
          <img
            id='remix-playing-cover'
            src={TestDrive}
            alt='Cover art of current remix'
          />
          <Box
            id='remix-information'
          >
            <Box
              display='flex'
              flexDirection='column'
            >
              <Box
                display='flex'
                flexDirection='row'
              >
                <Box>
                  <Typography id='remix-playing-title'>test drive</Typography>
                  <Typography id='remix-playing-artist'>Ariana Grande</Typography>
                </Box>
                {playing ? 
                  <PauseIcon 
                    onClick = {() => handleSetPlaying()}
                    style={{ 
                      'padding': '0.2em', 
                      'borderRadius': '20px', 
                      'alignSelf': 'center', 
                      color: 'white', 
                      'backgroundColor': '#1DB954'
                    }}/> :
                  <PlayArrowIcon onClick = {() => handleSetPlaying()} style={{ 'alignSelf': 'center',  'padding': '0.2em', 'borderRadius': '20px', color: 'white', 'backgroundColor': '#1DB954'}}/>}
              </Box>
              <Slider id='remix-playing-time' aria-label="Play time" defaultValue={0} valueLabelDisplay="auto" style={{ color: '#1DB954' }}/>
            </Box>
        </Box>
      </Box>
      
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

          </Box>
          <input type="range" id="vocal-volume" min="0" max="1" defaultValue="0.5" step="0.01"/>
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
          </Box>
          <input type="range" id="drums-volume" min="0" max="1" defaultValue="0.5" step="0.01"/>
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
          </Box>
          <input type="range" id="bass-volume" min="0" max="1" defaultValue="0.5" step="0.01"/>
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
          </Box>
          <input type="range" id="other-volume" min="0" max="1" defaultValue="0.5" step="0.01"/>
        </Box>
      </Box>

    </Box>
  </Box>
    )
}

export default StemRemix;

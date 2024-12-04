// @ts-nocheck

import  React, { useState, useEffect, useRef } from 'react';
import { 
  Box,
  Typography
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
  const [playing, setPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const audioContext = useRef(new AudioContext());
  const otherAudio = useRef(new Audio(other));
  const vocalAudio = useRef(new Audio(vocals));
  const bassAudio = useRef(new Audio(bass));
  const drumsAudio = useRef(new Audio(drums));

  const otherGainNode = useRef(new GainNode(audioContext.current, { gain: 0.5}));
  const vocalGainNode = useRef(new GainNode(audioContext.current, { gain: 0.5}));
  const bassGainNode = useRef(new GainNode(audioContext.current, { gain: 0.5}));
  const drumsGainNode = useRef(new GainNode(audioContext.current, { gain: 0.5}));

  const otherVolume = document.getElementById("other-volume")!;
  const vocalVolume = document.getElementById("vocal-volume")!;
  const bassVolume = document.getElementById("bass-volume")!;
  const drumsVolume = document.getElementById("drums-volume")!;

  const otherVolumeRef = useRef(null);
  const vocalVolumeRef = useRef(null);
  const bassVolumeRef = useRef(null);
  const drumsVolumeRef = useRef(null);

  const [audioElements] = useState({
    other: otherAudio.current,
    vocal: vocalAudio.current,
    bass: bassAudio.current,
    drums: drumsAudio.current
  });

  const handleSliderChange = (event, newValue) => {
    const audio = vocalAudio;
    audio.currentTime = (newValue / 100) * audio.duration;
  };

  const handleSetPlaying = () => {
    setPlaying(playing => !playing)
  }

  useEffect(() => {
    const setupContext = () => {
      const track = audioContext.current.createMediaElementSource(audioElements.other);
      track.connect(otherGainNode.current).connect(audioContext.current.destination)
    
      const vocalTrack = audioContext.current.createMediaElementSource(audioElements.vocal);
      vocalTrack.connect(vocalGainNode.current).connect(audioContext.current.destination);
    
      const bassTrack = audioContext.current.createMediaElementSource(audioElements.bass);
      bassTrack.connect(bassGainNode.current).connect(audioContext.current.destination);
    
      const drumsTrack = audioContext.current.createMediaElementSource(audioElements.drums);
      drumsTrack.connect(drumsGainNode.current).connect(audioContext.current.destination);
    };
    
    const setupEventListeners = () => {
      otherVolume?.addEventListener('input', event => {
        const element = event.target as HTMLInputElement
        otherGainNode.current.gain.value = parseFloat(element.value)
      })
    
      vocalVolume?.addEventListener('input', event => {
        const element = event.target as HTMLInputElement
        vocalGainNode.current.gain.value = parseFloat(element.value)
      })
    
      bassVolume?.addEventListener('input', event => {
        const element = event.target as HTMLInputElement
        bassGainNode.current.gain.value = parseFloat(element.value)
      })
    
      drumsVolume?.addEventListener('input', event => {
        const element = event.target as HTMLInputElement
        drumsGainNode.current.gain.value = parseFloat(element.value)
      })
    };

    const handleLoadedMetadata = () => {
      setDuration(vocalAudio.current.duration);
    };

    const handleTimeUpdate = () => {
      setCurrentTime(vocalAudio.current.currentTime);
    };

    vocalAudio.current.addEventListener('loadedmetadata', handleLoadedMetadata)
    vocalAudio.current.addEventListener('timeupdate', handleTimeUpdate)

    setupContext();
    setupEventListeners();

    return () => {
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [audioElements.other, audioElements.bass, audioElements.drums, audioElements.vocal]);

  useEffect(() => {
    const playAudio = async () => {
      try {
        if (audioContext.current.state === 'suspended') {
          await audioContext.current.resume(); // Ensure AudioContext is resumed after user interaction
        }

      if (playing) {
        vocalAudio.current.play()
        bassAudio.current.play()
        drumsAudio.current.play()
        otherAudio.current.play()
      } else {
        vocalAudio.current.pause()
        bassAudio.current.pause()
        drumsAudio.current.pause()
        otherAudio.current.pause()
      }
    } catch (error) {
      console.error('Error handling audio play:', error);
    }
  }
    
    playAudio();
  }, [playing]);

  const handleVolumeChange = (event, track) => {
    console.log("handle volume change " + event + " " + track )
    const value = parseFloat(event.target.value);
    switch (track) {
      case 'other':
        otherGainNode.current.gain.value = value;
        break;
      case 'vocal':
        console.log("before: " + vocalGainNode.current.gain.value)
        vocalGainNode.current.gain.value = value;
        console.log("after: " + vocalGainNode.current.gain.value)
        break;
      case 'bass':
        bassGainNode.current.gain.value = value;
        break;
      case 'drums':
        drumsGainNode.current.gain.value = value;
        break;
      default:
        break;
    }
  };


  return(
    <Box
      id='remix-window'
    >
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
                justifyContent='space-between'
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
              <Slider 
                id='remix-playing-time'
                value={(currentTime / duration) * 100}
                aria-label="Play time"
                defaultValue={0}
                style={{ color: '#1DB954' }}
                onChange={handleSliderChange}
              />
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
          <input 
            ref={vocalVolumeRef}
          type="range" id="vocal-volume" min="0" max="1" defaultValue="0.5" step="0.01"
          onInput={(event) => handleVolumeChange(event, 'vocal')}
          />
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
          <input 
            ref={drumsVolumeRef}
          type="range" id="drums-volume" min="0" max="1" defaultValue="0.5" step="0.01"
          onInput={(event) => handleVolumeChange(event, 'drums')}
          />
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
          <input
             ref={bassVolumeRef} 
            type="range" id="bass-volume" min="0" max="1" defaultValue="0.5" step="0.01"
            onInput={(event) => handleVolumeChange(event, 'bass')}
            />
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
          <input
            ref={otherVolumeRef} 
            type="range"
            id="other-volume"
            min="0"
            max="1"
            defaultValue="0.5"
            step="0.01"
            onInput={(event) => handleVolumeChange(event, 'other')}
          />
        </Box>
      </Box>

    </Box>
  </Box>
    )
}

export default StemRemix;

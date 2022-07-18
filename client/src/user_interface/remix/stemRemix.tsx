import  React, { useRef, useState, ChangeEvent, useEffect } from 'react';
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

import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PauseIcon from '@mui/icons-material/Pause';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

import Ctrl from '../test_drive.png';

import vocals from './../vocals.wav';
import bass from './../bass.wav';
import other from './../other.wav';
import drums from './../drums.wav';

import CurrentlyPlayingMobile from '../currentlyPlayingMobile';

// const Sliders = () => {
//   return (
//     <Box
//         id='sliders'
//       >
//         <Box
//           className='slider'
//         >
//           <Box
//             display='flex'
//             flexDirection='column'
//             p={2}
//           >
//             <FontAwesomeIcon icon={faMicrophoneLines} className='icon'/>
//             <Typography id='slider-text'>Vocals</Typography>
//           </Box>
//           <input type="range" id="vocal-volume" min="0" max="1" defaultValue="0.5" step="0.01"/>
//         </Box>

//         <Box
//           className='slider'
//         >
//           <Box
//             display='flex'
//             flexDirection='column'
//             p={2}
//           >
//             <FontAwesomeIcon icon={faDrum} className='icon'/>
//             <Typography id='slider-text'>Drums</Typography>
//           </Box>
//           <input type="range" id="drums-volume" min="0" max="1" defaultValue="0.5" step="0.01"/>
//         </Box>  
        
//         <Box
//           className='slider'
//         >
//           <Box
//             display='flex'
//             flexDirection='column'
//             p={2}
//           >
//             <FontAwesomeIcon icon={faGuitar} className='icon'/>
//             <Typography id='slider-text'>Bass</Typography>
//           </Box>
//           <input type="range" id="bass-volume" min="0" max="1" defaultValue="0.5" step="0.01"/>
//         </Box>
        
//         <Box
//           className='slider'
//         >
//           <Box
//             display='flex'
//             flexDirection='column'
//             p={2}
//           >
//             <FontAwesomeIcon icon={faMusic} className='icon'/>
//             <Typography id='slider-text'>Other</Typography>
//           </Box>
//           <input type="range" id="other-volume" min="0" max="1" defaultValue="0.5" step="0.01"/>
//         </Box>
//       </Box>
//   )
// }


const StemRemix = () => {  
    const [favorite, setFavorite] = useState(false);
    const [playing, setPlaying] = useState(false);

    const audioContext = new AudioContext();

    const otherAudio = new Audio(other);
    const otherGainNode = new GainNode(audioContext, { gain: 0.5});
    const otherVolume = document.getElementById("other-volume")!;

    const vocalAudio = new Audio(vocals);
    const vocalGainNode = new GainNode(audioContext, { gain: 0.5});
    const vocalVolume = document.getElementById("vocal-volume")!;

    const bassAudio = new Audio(bass);
    const bassGainNode = new GainNode(audioContext, { gain: 0.5});
    const bassVolume = document.getElementById("bass-volume")!;

    const drumsAudio = new Audio(drums);
    const drumsGainNode = new GainNode(audioContext, { gain: 0.5});
    const drumsVolume = document.getElementById("drums-volume")!;

    useEffect(() => {
      console.log('use effect')
      console.log(playing)
      console.log('use effect')
    }, [playing]);

    setupEventListeners()
    setupContext()

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

    const handleSetPlaying = () => {
      setPlaying(!playing)

      if (playing) {
        vocalAudio.play();
        bassAudio.play();
        drumsAudio.play();
        otherAudio.play();
      } else {
        vocalAudio.pause();
        bassAudio.pause();
        drumsAudio.pause();
        otherAudio.pause();
      }
    }

    const handleSetFavorite = () => {
      setFavorite(!favorite)
    };

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

  return(
    <Box
      id='remix-window'
    >
      <Typography id='stem-remix'>Stem Remix</Typography>
      <Box
        id='remix-and-sliders'
      >
        <Box
          id='remix-playing'
        >
          <img
            id='remix-playing-cover'
            src={Ctrl}
            alt='Cover art of current remix'
          />
          <Box
            id='remix-information'
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
              {playing ? <PauseIcon id='pause-icon' onClick = {() => handleSetPlaying()} /> : <PlayArrowIcon id='play-arrow-icon' onClick = {() => handleSetPlaying()} />}
            </Box>
            <Slider id='remix-playing-time' aria-label="Play time" defaultValue={0} valueLabelDisplay="auto" style={{ color: '#1DB954' }}/>
            <Typography id='remix-playing-time'>2min 02 secs</Typography>
          <Box
            id='remix-creator'
          >
            {favorite ? <FavoriteIcon id='favorite-icon' onClick = {() => handleSetFavorite()} /> : <FavoriteBorderIcon id='favorite-border-icon' onClick = {() => handleSetFavorite()} />}
            <img
              style={{ borderRadius: '20px', height: '20px', width: '20px'}}
              src={Ctrl}
              alt='User profile of remix creator'
              id='remix-creator-icon'
            />
            <Typography id='remix-playing-creator'>ernest</Typography>
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
            <Typography id='slider-text'>Vocals</Typography>
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
            <Typography id='slider-text'>Drums</Typography>
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
            <Typography id='slider-text'>Bass</Typography>
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
            <Typography id='slider-text'>Other</Typography>
          </Box>
          <input type="range" id="other-volume" min="0" max="1" defaultValue="0.5" step="0.01"/>
        </Box>
      </Box>

    </Box>
    
    <Box
      id='currently-playing'
    >
      <Box
        display='flex'
        flexDirection='row'
      >
        <img
            id='currently-playing-cover-art'
            src={Ctrl}
            alt="Cover art of currently playing track"
          />
        <Box
          display='flex'
          flexDirection='column'
          alignSelf='center'
          pl={1}
          textAlign='left'
        >
          <Typography id='title'>better off</Typography>
          <Typography id='artist'>Ariana Grande</Typography>
        </Box>
      </Box>
      {playing ? <PlayArrowIcon onClick = {() => handleSetPlaying()} style={{ 'alignSelf': 'center', color: '#1DB954'}}/> : <PauseIcon onClick = {() => handleSetPlaying()} style={{ 'alignSelf': 'center', color: '#1DB954'}}/>}
    </Box>
  </Box>
    )
}

export default StemRemix;

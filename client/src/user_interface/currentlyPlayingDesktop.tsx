import  { useState, ChangeEvent, useRef } from 'react';
import { Box, Typography, Slider } from '@material-ui/core';

import PauseIcon from '@mui/icons-material/Pause';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import ReplayIcon from '@mui/icons-material/Replay';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

import '../styling/currentlyPlayingDesktop.css';

import Ctrl from '../ctrl.jpg';

import drive from './test_drive.mp3';

const CurrentlyPlayingDesktop = () => {
  const [playing, setPlaying] = useState(false);
  const [favorite, setFavorite] = useState(false);
  const [volume, setVolume] = useState(0);

  const audioRef = useRef(new Audio(drive));
  const handleSetPlaying = () => {
    if (playing) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    
    setPlaying(!playing)
    // audioRef.current.play();

  };

  const handleSetFavorite = () => {
    setFavorite(!favorite)
  };

  const handleVolumeChange = (event: ChangeEvent<{}>, newValue: number | number[]) => {
    setVolume(newValue as number);
    var okay: number = Math.round(newValue as number/100)
    audioRef.current.volume = okay
  };


  return(
    <Box
      id='currently-playing-desktop'
    >
      <Box
        display='flex'
        flexDirection='row'
      >
        <Box
          id='currently-playing-desktop-song-information'
        >
          <img
            id='currently-playing-desktop-cover-art'
            src={Ctrl}
            alt='Covert art of track'
          />
        </Box>
        <Box
          display='flex'
          flexDirection='column'
          alignSelf='center'
          paddingLeft='10px'
          textAlign='left'
        >
          <Typography id='currently-playing-desktop-title'> 456</Typography>
          <Typography id='currently-playing-desktop-artist'>123</Typography>
        </Box>
        {favorite ? <FavoriteIcon id='currently-playing-favorite-icon' onClick = {() => handleSetFavorite()} /> : <FavoriteBorderIcon id='currently-playing-favorite-border-icon' onClick = {() => handleSetFavorite()} />}
      </Box>

      <Box
        width='50%'
      >
        <Box
          id='play-icons'
        >

          <ShuffleIcon id='shuffle-icon' />
          <SkipPreviousIcon id='skip-previous-icon' />
          
          {playing ? <PauseIcon id='pause-icon' onClick = {() => handleSetPlaying()} /> : <PlayArrowIcon id='play-arrow-icon' onClick = {() => handleSetPlaying()} />}
          
          <SkipNextIcon id='skip-next-icon' />    
          <ReplayIcon id='replay-icon' />
          
        </Box>
        <Slider defaultValue={0} aria-label="Default" valueLabelDisplay="auto" style={{ color: '#1DB954' }}/>
      </Box>
      <Box
        id='volume-icons'
      >
        <VolumeUpIcon id='volume-icon'/>

        <Box
          id='volume-level'
        >
          <Slider value={volume} defaultValue={50} aria-label="Volume" valueLabelDisplay="auto" style={{ marginRight: '30px', color: '#1DB954' }} onChange={handleVolumeChange}/>
        </Box>
      </Box>
    </Box>
    )
}

export default CurrentlyPlayingDesktop;

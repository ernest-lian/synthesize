import { FunctionComponent, ReactElement, useState } from 'react';
import { 
  Box,
  Typography,
  Slider
} from '@material-ui/core';

import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PauseIcon from '@mui/icons-material/Pause';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

import '../../styling/remixPlaying.css';

type RemixPlayingProps = {
  cover: string
}

const RemixPlaying: FunctionComponent<RemixPlayingProps> = (props): ReactElement => {  
  const [favorite, setFavorite] = useState(false);

  const handleSetFavorite = () => {
    setFavorite(!favorite)
  };

  const [playing, setPlaying] = useState(false);


  const handleSetPlaying = () => {
    setPlaying(!playing)

  };

  return(
    <Box
      id='remix-playing'
    >
      <img
        id='remix-playing-cover'
        src={props.cover}
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
          src={props.cover}
          alt='User profile of remix creator'
          id='remix-creator-icon'
        />
        <Typography id='remix-playing-creator'>ernest</Typography>
      </Box>
      </Box>
    </Box>
    )
}

export default RemixPlaying;

import { 
  Box,
  Typography
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { LOADINGCOLOR } from '../color/loading.js';

import background from '../images/sunset.gif';

const useStyles = makeStyles({
  backgroundImage: {
    backgroundImage: `url(${background})`,
    backgroundSize: 'auto',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundColor: 'rgb(254,253,163)'
  }
});

const Loading = ({
    
}) => {
  const classes = useStyles();

  return(
    <Box
      className={classes.backgroundImage}
      display='flex'
      justifyContent='center'
      alignItems='center'
      height='inherit'
    >
    </Box>
    )
}

export default Loading;

import { 
  Box,
  Typography,
  Button
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { LOADINGCOLOR } from '../color/loading.js';

import background from '../images/sunset.gif';

const useStyles = makeStyles({
  backgroundImage: {
    backgroundImage: `url(${background})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundColor: 'rgb(254,253,163)'
  },
  backgroundGradient: {
    background: 'linear-gradient(to top, #b993d6, #8ca6db)'
  },
  logoBoxWrapper: {
    borderTopLeftRadius: '20px',
    borderBottomLeftRadius: '20px'
  },
  loginBoxWrapper: {
    borderTopRightRadius: '20px',
    borderBottomRightRadius: '20px'
  },
  homeScreenText: {
    fontFamily: 'Open Sans, sans-serif',
    fontSize: '30px',
    color: 'white'
  },
  loginButton: {
    backgroundImage: 'linear-gradient(to right, #DAE2F8 0%, #D6A4A4  51%, #DAE2F8  100%)'         
  }
});

const Loading = ({
    
}) => {
  const classes = useStyles();

  return(
    <Box
      className={classes.backgroundGradient}
      display='flex'
      justifyContent='center'
      alignItems='center'
      height='inherit'
    >
      <Box
        display='flex'
        flexDirection='row'
        width='75%'
        height='75%'
      >
        <Box
          className={classes.logoBoxWrapper}
          width='50%'
          height='100%'
          bgcolor='white'
        >
          <p className={classes.homeScreenText}>synthesize</p>
        </Box>
        <Box
          className={classes.loginBoxWrapper}
          width='50%'
          height='100%'
          bgcolor='white'
        >
          <p className={classes.homeScreenText}>synthesize</p>
        </Box>
      </Box>
    </Box>
    )
}

export default Loading;

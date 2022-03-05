import { 
  Box,
  Typography,
  Button,
  TextField
} from '@material-ui/core';
import { withStyles, makeStyles } from '@material-ui/core/styles';

import { LOADINGCOLOR } from '../color/loading.js';

import background from '../images/sunset.gif';

import '../styling/home.css';

const useStyles = makeStyles({
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
  loginButton: {
    backgroundImage: 'linear-gradient(to right, #DAE2F8 0%, #D6A4A4  51%, #DAE2F8  100%)',
    color: 'white'         
  },
  emailAddressText: {
    color: 'white'
  },
  passwordText: {
    color: 'white'
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
        </Box>
        <Box
          className={classes.loginBoxWrapper}
          width='50%'
          height='100%'
          bgcolor='white'
        >
          <Box
            display='flex'
            flexDirection='column'
          >
            <Typography
              id='sign-in-text'
            >
              Sign In
            </Typography>
            <TextField
              InputLabelProps={{ className: classes.emailAddressText}} 
              label="Email" 
              variant="filled" 
            />
            <TextField 
              InputLabelProps={{ className: classes.passwordText}}
              label="Password" 
              variant="filled" 
            />
            <Typography>Forgot Your Password?</Typography>
            <Button variant="contained" className={classes.loginButton} >CONTINUE</Button>

            <Typography>Don't Have An Account?</Typography>
            <Typography>Register Now</Typography>
          </Box>
        </Box>
      </Box>
    </Box>
    )
}

export default Loading;

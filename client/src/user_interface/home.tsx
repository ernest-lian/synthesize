import { 
  Box,
  Typography,
  Button,
  TextField
} from '@material-ui/core';
import { withStyles, makeStyles, styled } from '@material-ui/core/styles';

import { LOADINGCOLOR } from '../color/loading.js';

import background from '../images/sunset.gif';

import '../styling/home.css';

const useStyles = makeStyles({
  backgroundGradient: {
    background: 'black'
  },
  loginBoxWrapper: {
    borderRadius: '20px'
  },
  loginButton: {
   color: 'white'         
  },
  emailAddressText: {
    color: 'white'
  },
  emailAddressInput: {
    borderRadius: '20px',
    background: '#C4C4C4'
  },
  passwordText: {
    color: 'white',
    fontFamily: 'Lato, sans-serif',
    fontWeight: 500
  },
  passwordInput: {
    borderRadius: '20px',
    background: '#C4C4C4'
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
        width='25%'
        height='50%'
      >
        <Box
          className={classes.loginBoxWrapper}
          width='100%'
          height='100%'
          bgcolor='white'
          pl={5}
          pr={5}
          display='flex'
          flexDirection='column'
          justifyContent='space-around'
        >
          <Box
            display='flex'
          >
              <Typography
                id='synthesize-text'
              >
                synthesize
              </Typography>
          </Box>
          <Box>
            <Box
              display='flex'
              flexDirection='column'
            >
              <Typography
                id='sign-in-text'
              >
                Sign In
              </Typography>
              <Box
                pt={2}
                pb={2}
              >
                <TextField
                  InputLabelProps={{ 
                    className: classes.emailAddressText
                  }} 
                  InputProps = {{
                    className: classes.emailAddressInput
                  }}
                  label="Email" 
                  variant="filled"
                  fullWidth={true}
                />
              </Box>
              <TextField 
                InputLabelProps={{ className: classes.passwordText}}
                InputProps = {{
                  className: classes.passwordInput
                }}
                label="Password" 
                variant="filled" 
              />
              <Box
                component={Typography}
                pt={2}
                pb={2}
                textAlign='left'
                pl={2}
              >
                Forgot Your Password?
              </Box>
              <Button variant="contained" className={classes.loginButton} >CONTINUE</Button>
            </Box>
            <Box
              pt={10}
            >
              <Typography>Don't Have An Account?</Typography>
              <Typography>Register Now</Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
    )
}

export default Loading;

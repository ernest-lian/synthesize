import { 
  Box,
  Typography
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { LOADINGCOLOR } from '../color/loading.js';

const useStyles = makeStyles({
  loadingText: {
    color: '#E8E8E8',
    fontSize: '50px',
    fontFamily: 'Varela Round, sans-serif',
  },
});

const Loading = ({
    
}) => {
  const classes = useStyles();

  return(
    <Box
      display='flex'
      justifyContent='center'
      alignItems='center'
      bgcolor={LOADINGCOLOR}
      height='inherit'
    >
      <Typography
        className={classes.loadingText}
      >
        LOADING...
      </Typography>
    </Box>
    )
}

export default Loading;

import { Box } from '@material-ui/core';
import { Typography } from '@mui/material';

import '../styling/home.css';

const Home = () => {

  return(
    <Box
      id='home-window'
    >
      <Box
        id='home'
      >
        <Typography id='user-name'>Hello</Typography>
      </Box>
    </Box>
    )
}

export default Home;

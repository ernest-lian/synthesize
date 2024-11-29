import { 
  Box
} from '@material-ui/core';

import '../styling/window.css';

import Remix from './remix/stemRemix';

const Window = () => {

  return(
    <Box
      id='application-wrapper'
      display='flex'
      justifyContent='center'
      alignItems='center'
    >
      <Remix/>
    </Box>
    )
}

export default Window;
/* React */
import { useState } from 'react';

/* Material-UI */
import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

/* Navigation icons */

import HomeIcon from '@mui/icons-material/Home';

/* Router */
import { Link } from "react-router-dom";

/* Styling */
import '../styling/navigation.css';

const styles = makeStyles({
  selectedNavigation: {
      "background-color": "red",
      "border-radius": "20px",
      "padding": "5px"
  },
  nonSelectedNavigation: {
    "border-radius": "20px",
    "padding": "5px"
  }
});

const Navigation = () => {
  const classes = styles();
  const [page, setPage] = useState('remix')

  const handleCurrentPage = (currentPage: string) => {
    console.log("setting page to " + page);
    setPage(currentPage)
  }

  return(
    <Box
      id='navigation'
    > 
    <Link 
          to={'/'}
          style={{ textDecoration: 'none', color: 'black' }}
      >
        <Box
          onClick={()=> {handleCurrentPage('home')}}
          id='home-icon-container'
        >
          <HomeIcon id='home-icon' className={(page === 'home') ? classes.selectedNavigation : classes.nonSelectedNavigation} fontSize="medium"/>
        </Box>
      </Link>    
    </Box>
    )
}

export default Navigation;

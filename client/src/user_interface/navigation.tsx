/* React */
import { useState } from 'react';

/* Material-UI */
import { Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

/* Navigation icons */
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';

/* Router */
import { Link } from "react-router-dom";

/* Styling */
import '../styling/navigation.css';

const styles = makeStyles({
  selectedNavigation: {
      "background-color": "white",
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
          to={'/remix'}
          style={{ textDecoration: 'none', color: 'black' }}
      >
        <Box
          onClick={()=> {handleCurrentPage('remix')}}
          id='remix-icon-container'
        >
          <MusicNoteIcon id='remix-icon' className={(page === 'remix') ? classes.selectedNavigation : classes.nonSelectedNavigation} fontSize="medium"/>
          <Typography id='navigation-remix'>Remix</Typography>
        </Box>
      </Link>

      <Link 
          to={'/library'}
          style={{ textDecoration: 'none',  color: 'black' }}
      >
        <Box
          onClick={()=> {handleCurrentPage('library')}}
          id='library-icon-container'
        >
          <LibraryMusicIcon id='library-icon' className={(page === 'library') ? classes.selectedNavigation : classes.nonSelectedNavigation} fontSize="medium"/>
          <Typography id='navigation-library'>Library</Typography>
        </Box>
      </Link>
    </Box>
    )
}

export default Navigation;

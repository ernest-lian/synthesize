/* React */
import React, { useState } from 'react';

/* Material-UI */
import { Box, Typography } from '@material-ui/core';

/* Navigation icons */
import HomeIcon from '@mui/icons-material/Home';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';


/* Router */
import { Link } from "react-router-dom";

/* Styling */
import '../styling/navigation.css';

const Navigation = () => {
  const [page, setPage] = useState('')

  const handleCurrentPage = (currentPage: string) => {
    console.log("setting page to " + currentPage);
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
          <MusicNoteIcon id='remix-icon' fontSize="large"/>
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
          <LibraryMusicIcon id='library-icon' fontSize="large"/>
          <Typography id='navigation-library'>Library</Typography>
        </Box>
      </Link>
    </Box>
    )
}

export default Navigation;

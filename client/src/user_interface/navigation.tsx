/* React */
import React, { useState } from 'react';

/* Material-UI */
import { Box } from '@material-ui/core';

/* Navigation icons */
import HomeIcon from '@mui/icons-material/Home';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';


/* Router */
import { Link } from "react-router-dom";

/* Styling */
import '../styling/navigation.css';

const Navigation = ({
    
}) => {
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
          to={'/home'}
      >
        <Box
          onClick={()=> {handleCurrentPage('home')}}
          id='home-icon'
        >
          <HomeIcon sx={{ color: "#1DB954" }}/>
        </Box>
      </Link>
      
      <Link 
          to={'/remix'}
      >
        <Box
          onClick={()=> {handleCurrentPage('remix')}}
          id='remix-icon'
        >
        <MusicNoteIcon sx={{ color: "#1DB954" }}/>
        </Box>
      </Link>

      <Link 
          to={'/library'}
      >
        <Box
          onClick={()=> {handleCurrentPage('library')}}
          id='library-icon'
        >
          <LibraryMusicIcon sx={{ color: "#1DB954" }}/>
        </Box>
      </Link>
    </Box>
    )
}

export default Navigation;

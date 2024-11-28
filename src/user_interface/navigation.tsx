/* React */
import { useState } from 'react';

/* Material-UI */
import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

/* Navigation icons */
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import AddIcon from '@mui/icons-material/Add';

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
      <Link 
          to={'/library'}
          style={{ textDecoration: 'none', color: 'black' }}
      >
        <Box
          onClick={()=> {handleCurrentPage('library')}}
          id='library-icon-container'
        >
          <MusicNoteIcon id='library-icon' className={(page === 'remix') ? classes.selectedNavigation : classes.nonSelectedNavigation} fontSize="medium"/>
        </Box>
      </Link>

      <Link 
          to={'/add'}
          style={{ textDecoration: 'none', color: 'black' }}
      >
        <Box
          onClick={()=> {handleCurrentPage('add')}}
          id='add-icon-container'
        >
          <AddIcon id='add-icon' className={(page === 'add') ? classes.selectedNavigation : classes.nonSelectedNavigation} fontSize="medium"/>
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
        </Box>
      </Link>
      <Link 
          to={'/profile'}
          style={{ textDecoration: 'none', color: 'black' }}
      >
        <Box
          onClick={()=> {handleCurrentPage('profile')}}
          id='profile-icon-container'
        >
          <PersonIcon id='profile-icon' className={(page === 'profile') ? classes.selectedNavigation : classes.nonSelectedNavigation} fontSize="medium"/>
        </Box>
      </Link>   
    </Box>
    )
}

export default Navigation;

import { 
  Box,
  Button
} from '@material-ui/core';

import '../styling/remix.css';

import Navigation from './navigation';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";



// const handleClick = () => {
//   return fetch("http://localhost:5000/testing", {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({
//       'value': 'ernest'
//     })
//   })
//   .then(response => response.json())
//   .then(data => {
//     setText(data['name'])
//     console.log('the data: ', data)
//   }).catch(error => console.error('Error', error))
// }

const Remix = ({

  
    
}) => {

  return(
    <Box
      id='remix-window'
    >
      <Box
        id='remix'
      >
        <Button>Upload</Button>
      </Box>
    </Box>
    )
}

export default Remix;

import React, {useEffect} from 'react';

import { createTheme, ThemeProvider } from "@material-ui/core/styles";

import './App.css'; 
import Window from './user_interface/window';

const theme = createTheme({
  typography: {
    fontFamily: [
      "Arial"
    ].join(",")
  }
});

const App = () => {

  // const createRemix = () => {
  //   var xhr = new XMLHttpRequest()

  //     xhr.addEventListener('load', () => {})

  //     xhr.open('POST', 'http://localhost:5000/remix', false)
  //     xhr.send()
      
  //     const responseBody = JSON.parse(xhr.response)

  //     if (responseBody['response'] === 200){
  //         const remixName = responseBody
  //         console.log(remixName)
  //         localStorage.setItem('remixName', remixName);
  //     } else {
  //         const errorMessage = responseBody['error']
  //     }
  // }

  useEffect(() => {
    // createRemix();
}, []);

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Window/>
      </div>
    </ThemeProvider>
  );
}

export default App;


// /* React */
// import React from 'react';

// import { 
//   Box
// } from '@material-ui/core';

// /* Local Files */
// import Window from './window.js';
// import SideBar from './sideBar.js';

// /* Local Files Styling */
// import './App.css';

// function App() {
//   return (
//   	<Box className='App'>
//   		<Window/>
//       <SideBar id='side-bar'/>
//   </Box>
//   );
// }

// export default App;

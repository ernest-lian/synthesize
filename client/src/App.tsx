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
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Window/>
      </div>
    </ThemeProvider>
  );
}

export default App;

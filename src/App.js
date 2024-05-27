import { ThemeProvider, createTheme } from '@mui/material';
import './App.css';
import Home from './screens/Home';
import Scroll from './components/SmoothScroll';

function App() {
  const theme = createTheme({
    typography: {
      allVariants: {
        fontFamily: 'Poppins'
      },
      h1: {
        fontSize: '125px',
        fontWeight: 600,
        textShadow: '0px 3px 6px #00000066'
      },
      h2: {
        fontSize: '60px',
        fontWeight: 600,
        textShadow: '0px 3px 6px #00000066'
      },
      h3: {
        fontSize: '130px',
        fontWeight: 800,
      },
      h4: {
        fontSize: '30px',
        fontWeight: 600
      },
      h5: {
        fontSize: '30px',
        fontWeight: 500
      },
      h6: {
        fontSize: '14px'
      },
      subtitle1: {
        fontSize: '22px',
        fontWeight: 600
      },
      body1: {
        fontSize: '16px',
        fontWeight: 500
      }
    }
  })

  return (
    <div className="App">
      {/*
      <Scroll />
      */}

      <ThemeProvider theme={theme}>
        <Home />
      </ThemeProvider>
    </div>
  );
}

export default App;

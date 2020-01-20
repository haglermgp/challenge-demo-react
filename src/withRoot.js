import React from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import blue from '@material-ui/core/colors/blue';
import pink from '@material-ui/core/colors/pink';

const theme = createMuiTheme({
  palette: {
    primary: blue,
    secondary: pink,
  },
  typography: {
    useNextVariants: true,
    fontFamily: "'Roboto', sans-serif",
    h1: {
      fontFamily: "'Roboto', sans-serif",
    },
    h2: {
      fontFamily: "'Roboto', sans-serif",
    },
    h3: {
      fontFamily: "'Roboto', sans-serif",
    },
    h4: {
      fontFamily: "'Roboto', sans-serif",
    },
    h5: {
      fontFamily: "'Roboto', sans-serif",
    },
    h6: {
      fontFamily: "'Roboto', sans-serif",
    },
    body1: {
      fontFamily: '"Open Sans", sans-serif',
    },
    body2: {
      fontFamily: '"Open Sans", sans-serif',
    },
    caption: {
      fontFamily: '"Open Sans", sans-serif',
    },
    button: {
      fontFamily: '"Open Sans", sans-serif',
    }
  },
});

function withRoot(Component) {
  function WithRoot(props) {
    // MuiThemeProvider makes the theme available down the React tree

    return (
      <MuiThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Component {...props} />
      </MuiThemeProvider>
    );
  }

  return WithRoot;
}

export default withRoot;
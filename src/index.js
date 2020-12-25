import React from 'react';
import ReactDOM from 'react-dom';
import Header from './header';
import AboutMe from './aboutme';
import Links from './links';
import * as serviceWorker from './serviceWorker';
// import ThemeProvider from '@material-ui/core/ThemeProvider';
// import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';

// let theme = createMuiTheme({
//   typography: {

//   },
// });
// theme = responsiveFontSizes(theme);
document.body.style = 'background: #121212;';
ReactDOM.render(
  <>
    {/* <ThemeProvider theme={theme}> */}
      <Header />
      <AboutMe />
      <Links />
    {/* </ThemeProvider> */}
  </>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

import React from 'react';
// import './header.css';
import TypingAni from './TypingAni'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  root: {
    backgroundColor: '#121212'
  },
  name: {
    color: 'white',
    margin: '0% 0% 0% 0.1%',
    paddingTop: '30%',
    textAlign: 'left',
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: '14vw',
    letterSpacing: '0.151em',
  },
  subtitle: {
    color: '#A698C5',
    margin: '0% 0% 0% 1%',
    textAlign: 'left',
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: '5vw',
    letterSpacing: '0.151em',
  },
  link: {
    color: 'white',
    margin: '0% 0% 0% 1%',
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: '300',
    fontSize: '2vw',
    letterSpacing: '0.151em',
    textTransform: 'lowercase'
  }
});


function Header() {
  const classes = useStyles();
  const cont = ["work in progress"]
  var win = window,
    doc = document,
    docElem = doc.documentElement,
    body = doc.getElementsByTagName('body')[0],
    x = win.innerWidth || docElem.clientWidth || body.clientWidth,
    y = win.innerHeight || docElem.clientHeight || body.clientHeight;

  return (
    <>
      <h1 className={classes.name}>denny lee.</h1>
      <TypingAni content={cont} format={classes.subtitle} />
      {/* <div className="small-spacer" />
      <div>
        <a className={classes.link} href="https://www.linkedin.com/in/dlee14/">linkedin</a>
        <a className={classes.link} href="https://github.com/denlee973">github</a>
        <a className={classes.link} href="https://www.instagram.com/_dn.y/">instagram</a>
        <a className={classes.link} href="https://drive.google.com/file/d/16C4aYr-hKllCyNdw0fx26FanR59WKmQw/view?usp=sharing">resume</a>
      </div> */}
    </>
  );
}

export default Header;

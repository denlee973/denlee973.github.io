import React from 'react';
import TypingAni from './TypingAni';
// import dimensions from './dimensions'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    backgroundColor: '#121212'
  },
  header:{
    paddingTop: '15%',
    paddingBottom: '15%'
  },
  name: props => ({
    color: 'white',
    margin: '0% 0% 0% 0.1%',
    textAlign: 'left',
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: '14vw',
    letterSpacing: '0.151em',
  }),
  subtitle: {
    color: '#A698C5',
    margin: '0% 0% 0% 1%',
    textAlign: 'left',
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: '5vw',
    letterSpacing: '0.151em',
  }
});


const Header = () => {
  const cont = ["work in progress"]
  // let [heightPadding, setHeightPadding] = React.useState(0);
  // setHeightPadding(dimensions());
  const classes = useStyles();
  return (
    <div className={classes.header}>
      <h1 className={classes.name}>denny lee.</h1>
      <TypingAni content={cont} format={classes.subtitle} />
      
      {/* <div className="small-spacer" />
      <div>
        <a className={classes.link} href="https://www.linkedin.com/in/dlee14/">linkedin</a>
        <a className={classes.link} href="https://github.com/denlee973">github</a>
        <a className={classes.link} href="https://www.instagram.com/_dn.y/">instagram</a>
        <a className={classes.link} href="https://drive.google.com/file/d/16C4aYr-hKllCyNdw0fx26FanR59WKmQw/view?usp=sharing">resume</a>
      </div> */}
    </div>
  );
}

export default Header;

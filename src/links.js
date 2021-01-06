import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    pad: {
        margin: '0% 15% 0% 15%',
        paddingTop: '15%',
        paddingBottom: '15%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontFamily: 'Montserrat',
        fontWeight: 'normal',
        fontSize: '4vw',
        color: '#FFFFFF',
        margin: '0% 0% 3% 0%'
    },
    gridCentered: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    img: {
        justifyContent: 'center',
        alignItems: 'center',
        margin: 'auto',
        position: 'relative',
        maxWidth: '100%'
    },
    link: {
        color: 'white',
        margin: 'auto',
        fontFamily: 'Montserrat',
        fontStyle: 'normal',
        fontWeight: '300',
        fontSize: '2vw',
        letterSpacing: '0.151em'
    }
}));

const Links = () => {
    const classes = useStyles();
    return (
        <div className={classes.pad}>
            <h4 className={classes.title}>links</h4>
            <Grid container spacing={10} className={classes.gridCentered} >
                <Grid item className={classes.gridCentered}>
                    <img className={classes.img} src="linkedin.png" alt="linkedinButton" /> <br />
                    <a className={classes.link} href='https://www.linkedin.com/in/dlee14/'>linkedin</a>
                </Grid>
                <Grid item className={classes.gridCentered}>
                    <img className={classes.img} src="github.png" alt="githubButton" /> <br />
                    <a className={classes.link} href="https://github.com/denlee973">github</a>
                </Grid>
                <Grid item className={classes.gridCentered}>
                    <img className={classes.img} src="figma.png" alt="figmaButton" /> <br />
                    <a href='https://www.linkedin.com/in/dlee14/' className={classes.link}>figma</a>
                </Grid>
                <Grid item className={classes.gridCentered}>
                    <img className={classes.img} src="instagram.png" alt="instagramButton" /> <br />
                    <a className={classes.link} href="https://www.instagram.com/_dn.y/">instagram</a>
                </Grid>
                <Grid item className={classes.gridCentered}>
                    <img className={classes.img} src="resume.png" alt="resumeButton" /> <br />
                    <a className={classes.link} href="https://drive.google.com/file/d/1iGmrgygxaUWOu28NQsN1cPEl30Un6VX2/view?usp=sharing">resume</a>
                </Grid>
            </Grid>
        </div>
    );
}

export default Links;
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
                    <a className={classes.link} href='https://www.linkedin.com/in/dlee14/'><img className={classes.img} src="linkedin.png" alt="linkedinButton" /></a> <br />
                    <a className={classes.link} href='https://www.linkedin.com/in/dlee14/'>linkedin</a>
                </Grid>
                <Grid item className={classes.gridCentered}>
                    <a className={classes.link} href="https://github.com/denlee973"><img className={classes.img} src="github.png" alt="githubButton" /></a> <br />
                    <a className={classes.link} href="https://github.com/denlee973">github</a>
                </Grid>
                <Grid item className={classes.gridCentered}>
                    <a href='https://www.linkedin.com/in/dlee14/' className={classes.link}><img className={classes.img} src="figma.png" alt="figmaButton" /></a> <br />
                    <a href='https://www.linkedin.com/in/dlee14/' className={classes.link}>figma</a>
                </Grid>
                <Grid item className={classes.gridCentered}>
                    <a className={classes.link} href="https://www.instagram.com/_dn.y/"><img className={classes.img} src="instagram.png" alt="instagramButton" /></a> <br />
                    <a className={classes.link} href="https://www.instagram.com/_dn.y/">instagram</a>
                </Grid>
                <Grid item className={classes.gridCentered}>
                    <a className={classes.link} href="Denny Lee - Resume S21.pdf"><img className={classes.img} src="resume.png" alt="resumeButton" /></a> <br />
                    <a className={classes.link} href="Denny Lee - Resume S21.pdf">resume</a>
                </Grid>
            </Grid>
        </div>
    );
}

export default Links;
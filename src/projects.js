import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    pad: {
        margin: 'auto',
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
    subtitle: {
        fontFamily: 'Montserrat',
        fontWeight: 'normal',
        fontSize: '1.8vw',
        color: '#FFFFFF',
        margin: '2% 0% 0% 0%'
    },
    p: {
        fontFamily: 'Montserrat',
        fontWeight: 'normal',
        fontSize: '1.5vw',
        lineHeight: '110%',
        color: '#FFFFFF'
    },
    img: {
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        maxWidth: '100%'
    },
    br: {
        lineHeight: '10px'
    }
}));

const Projects = () => {
    const classes = useStyles();
    return (
        <Container maxWidth="lg" className={classes.pad}>
            <h4 className={classes.title}>projects</h4>
            <a className={classes.link} href='https://www.dennylee.ca'><img className={classes.img} src="personal website.png" alt="personal website" /></a>
            <h6 className={classes.subtitle}>personal website</h6>
            <p className={classes.p}>built using react. designed using figma. inspired by gmk oblivion.</p>

        </Container>
    );
}

export default Projects;
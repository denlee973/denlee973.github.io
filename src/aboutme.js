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
        margin: '0% 0% 0% 0%'
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

const AboutMe = () => {
    const classes = useStyles();
    return (
        <Container maxWidth="lg" className={classes.pad}>

            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                    <img className={classes.img} src="face.png" alt="my face" />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <>
                        <h4 className={classes.title}>about me</h4>
                        <p className={classes.p}>
                            hey there! I’m denny, a computer engineering student at the univeristy of waterloo.<br className={classes.br}/>
                            so far, I’ve worked at scotiabank for 8 months as a developer.<br className={classes.br}/>
                            aside from tech, you can find me singing with the water boys and catching up on the latest anime.
                        </p>
                    </>
                </Grid>
            </Grid>
        </Container>
    );
}

export default AboutMe;
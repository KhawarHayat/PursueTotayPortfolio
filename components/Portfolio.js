import React, { Component } from 'react'
import Title from './Title'
import { makeStyles } from '@mui/styles'
import Project from './Project'
const useStyles = makeStyles(() => ({
    Portfolio: {
        position: "relative",
        minHeight: "100vh",
        backgroundColor: "black",
    },
    portfolio_Projects: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        flexWrap: "wrap",
    },
    // ProjectLoader: {
    //     height: "300px",
    //     width: "300px",
    //     display: "flex",
    //     justifyContent: "center",
    //     alignItems: "center",
    // }
}))
const Portfolio = (props) => {
    const classes = useStyles(props)
    return (
        <section id='Portfolio' className={classes.Portfolio}>
            <Title title='My Portfolio' mycontent='' color='white' bgColor='crimson' afterBgColor='black' afterColor='crimson' />
            <div className={classes.portfolio_Projects}>
                <Project src='./Portfolio3.jpg' alt='Profile 3' name='Portfolio 3' dis='My online resume which show my skills and experience.' list={['React', 'JavaScript', 'Node', 'Sass',]} git='https://github.com/KhawarHayat/Portfolio3' website='https://main.d39x6nn3w5wlal.amplifyapp.com/' />
                <Project src='./Chaeban.jpg' alt='Chaeban' name='Chaeban Form' dis='Ice Cream making company need a form to get some info from users' list={['React', 'JavaScript', 'Node', 'React Bootstrap', 'Sass']} git='https://github.com/KhawarHayat/Chaeban' website='https://main.d3si9psuoa6e84.amplifyapp.com/' />
                <Project src='./Emporium.jpg' alt='Emporium' name='Emporium Shop' dis='This is an online store to sell the clothes' list={['React', 'Redux', 'JavaScript', 'Node', 'Material-UI', 'Sass']} git='https://github.com/KhawarHayat/Emporium' website='https://master.d3l6nlnytu6l8u.amplifyapp.com/' />
                <Project src='./raisely.jpg' alt='Raisely' name='Raisely Form' dis='Make a form that send the data to raisely company.' list={['React', 'Redux', 'JavaScript', 'Node', 'Material-UI', 'Sass']} git='https://github.com/KhawarHayat/RaiselyForm' website='https://b89w9.csb.app/' />
                <Project src='./Portfolio0.jpg' alt='Portfolio2' name='Portfolio 2' dis='Another online portfolio to show my work' list={['React', 'Redux', 'JavaScript', 'Node', 'Material-UI', 'Sass']} git='https://github.com/KhawarHayat/Portfolio2' website='https://master.d3iivkwy7rqvu6.amplifyapp.com/' />
                <Project src='./EventApp.jpg' alt='EventApp' name='Event App' dis='This app will tell all the event happening near you (in your city)' list={['React', 'Redux', 'JavaScript', 'Node', 'Material-UI', 'Sass']} git='https://github.com/KhawarHayat/EventApp' website='https://github.com/KhawarHayat/EventApp' />
                <Project src='./Portfolio.jpg' alt='Portfolio1' name='Portfolio 1' dis='My first online porfolio.' list={['HTML5', 'CSS3', 'React', 'JavaScript', 'Node', 'Material-UI', 'Sass']} git='https://github.com/KhawarHayat/Portfolio' website='https://github.com/KhawarHayat/Portfolio' />
                <Project src='./MilkMan.jpg' alt='Doodh wala' name='Doodh Wala' dis='It is a web app which connect the customer and the dairy farmer directly. It is a web app for online dairy product delivery.' list={['HTML5', 'CSS3', 'React', 'JavaScript', 'Node', 'Express.js', 'MySQL', 'REST APIs', 'Semantic-UI']} git='https://github.com/KhawarHayat/DoodhWala' website='https://github.com/KhawarHayat/DoodhWala' />
                <Project src='./FMS.jpg' alt='FMS' name='Frequency Management System' dis='This is a web app to manage the frequency of diffrent radios and diffrent antennas.' list={['HTML5', 'CSS3', 'React', 'JavaScript', 'Node', 'Express.js', 'MongoDB', 'REST APIs', 'Sass']} git='https://github.com/KhawarHayat/FreqManagement' website='https://github.com/KhawarHayat/FreqManagement' />
                <Project src='./LandingPage.jpg' alt='Landing' name='Musical Store' dis='Made on demand for musical app.' list={['HTML5', 'CSS3', 'React', 'JavaScript']} git='https://github.com/KhawarHayat/LandingPage' website='https://github.com/KhawarHayat/LandingPage' />
            </div>

        </section>
    );
}


export default Portfolio;
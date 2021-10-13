import React from 'react'
import Typewriter from 'typewriter-effect';
import { makeStyles } from '@mui/styles';
const useStyles = makeStyles(() => ({
    home_home: {
        display: "flex",
        height: "100vh",
        width: "100%",
        color: "black",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
    },
    home_maxWidth: {
        width: "100%",
        padding: "0px 85px",
        margin: "auto",
        color: "white",
    },
    home_text1: {
        fontSize: "27px",
        fontFamily: `"Ubuntu", sans-serif`,
    },
    home_text2: {
        fontSize: "70px",
        fontWeight: "500",
        fontFamily: `"Ubuntu", sans-serif`,
    },
    home_text3: {
        fontSize: "40px",
        fontFamily: `"Ubuntu", sans-serif`,  
    },
    home_span: {
        color: "crimson",
    },
    home_button: {
        marginTop: "5px",
        padding: "15px 30px",
        border: "1px solid crimson",
        backgroundColor: "crimson",
        textDecoration: "none",
        color: "white",
        borderRadius: "10px",
        fontWeight: "600",
        transition: "all 0.3s ease",
        '&:hover': {
            border: "1px solid crimson",
            backgroundColor: "transparent",
            color: "crimson",
            transition: "all 0.3s ease",
        }
    }
    
}))

const Home = (props) => {
    const styles = useStyles(props)
    return (
        <section id='Home' className={styles.home_home} style={{ backgroundImage: `url('../profile2.jpg')` }}>
            <div className={styles.home_maxWidth}>
                <p className={styles.home_text1}>Hello, my name is</p>
                <p className={styles.home_text2}>Khawar Hayat</p>
                <p className={styles.home_text3}>And I am a <span className={styles.home_span}><Typewriter
                    options={{
                        strings: ['Frontend Developer', 'React Developer', 'MERN Stack Developer', 'Freelancer'],
                        autoStart: true,
                        loop: true,
                    }}
                /></span> </p>
                {/* <button className={styles.home_button} onClick={() => { document.getElementById('Contact').scrollIntoView(); }} >Hire me</button> */}
            </div>

        </section>
    );
}

export default Home;
import React, { useState } from 'react'
import { FaSearchPlus, FaGithub, FaLaptop } from 'react-icons/fa'
import { makeStyles } from '@mui/styles'
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
const useStyles = makeStyles(() => ({
    Hide: {
        display: "none",
    },
    Model: {
        position: "fixed",
        top: "0",
        zIndex: "1000",
        height: "100vh",
        width: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.8)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    projectDetail: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        position: "relative",
        padding: "5%",
        height: "80%",
        width: "60%",
        boxSizing: "border-box",
        backgroundColor: "rgb(238, 238, 238)",
        fontFamily: `'Ubuntu', sans-serif`,
        color: "rgb(54, 52, 52)",
    },
    info: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
    },
    name: {
        fontSize: "40px",
        fontWeight: "600",
    },
    discripction: {
        fontSize: "20px",
        fontWeight: "300",
    },
    tech: {
        fontSize: "30px",
        fontWeight: "400",
    },
    list: {
        paddingLeft: "20px",
        listStyle: "square",
    },
    projectPic: {
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
    },
    img: {
        margin: "20px 0px",
        height: "200px",
        width: "300px",
        objectFit: "cover",
    },
    link: {
        width: "300px",
        height: "20%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
    },
    a: {
        color: "#222",
    },
    Icon: {
        height: "50px",
        width: "50px",
        color: "#222",
        '&:hover': {
            color: "crimson",
        }
    },
    Project: {
        height: "250px",
        width: "300px",
        borderRadius: "15px",
        backgroundColor: "#222",
        marginBottom: "25px",
        transition: "all 1s ease",
        '&:hover': {
            backgroundColor: "crimson",
            height: "250px",
            width: "300px",
            
        }
    },
    project_img: {
        objectFit: "cover",
        height: "200px",
        width: "300px",
        borderTopLeftRadius: "15px",
        borderTopRightRadius: "15px",
        // '&:hover': {
        //     display: "none",
        // }
    },
    project_p: {
        height: "50px",
        fontFamily: `'Ubuntu', sans-serif`,
        fontWeight: "500",
        color: "white",
        width: "100%",
        textAlign: "center",
        marginTop: "5px",
        // '&:hover': {
        //     display: "none",
        // }
    },
    onhover: {
        display: "none",
        '&:hover': {
            display: "block",
            height: "50px",
            width: "50px",
            color: "white",
        }
    },
}))
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 1200,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

export default function Project(props) {
    const classes = useStyles(props)
    const [show, setShow] = useState(false)
    const list = props.list.map((item) => {
        return <li>{item}</li>
    })
    return (
        <div id={props.src} className={classes.Project} onClick={() => setShow(!show)}>
            <img className={classes.project_img} alt={props.alt} src={props.src} />
            <p className={classes.project_p}>{props.name}</p>
            <FaSearchPlus className={classes.onhover} />
            <Modal
                open={show}
                // onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <div className={props.classname}>
                        <div className={classes.projectDetail}>
                            <div className={classes.info}>
                                <p className={classes.name}>{props.name}</p>
                                <p className={classes.discripction}>{props.dis}</p>
                                <p className={classes.tech}>Technologies used</p>
                                <ul className={classes.list}>
                                    {list}
                                </ul>

                            </div>
                            <div className={classes.projectPic}>
                                <img className={classes.img} alt='project' src={props.src} />
                                <div className={classes.link}>
                                    <a className={classes.a} href={props.git}><FaGithub className={classes.Icon} /></a>
                                    <a className={classes.a} href={props.website}><FaLaptop className={classes.Icon} /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </Box>
            </Modal>
        </div>
    )
}
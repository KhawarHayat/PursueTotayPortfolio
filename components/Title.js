import React from 'react'
import { makeStyles } from '@mui/styles'
const useStyles = makeStyles(() => ({
    Title: {
        paddingTop: "20px",
        position: "relative",
        fontFamily: `'Ubuntu', sans-serif`,
    },
    title: {
        position: "relative",
        margin: "5% 0%",
        paddingBottom: "20px",
        textAlign: "center",
        fontSize: "30px",
        fontWeight: "600",
        color: "var(--title-color)",
        '&::before': {
            content: `" "`,
            position: "absolute",
            bottom: "0",
            width: "280px",
            height: "3px",
            border: "1px solid var(--bg-color)",
            backgroundColor: "var(--bg-color)",
            borderRadius: "2%",
            transform: "translateX(-18%)",
        }
    },
    content: {
        fontSize: "20px",
        position: "absolute",
        color:  "var(--after-color)",
        backgroundColor: "var(--after-bgcolor)",
        top: "88%",
        right: "45%",
        fontWeight: "500",
    }
}))

export default function Title(props) {
    const classes = useStyles(props)
    return (
        <div className={classes.Title}>
            <h3 className={classes.title} style={{ '--title-color': props.color, '--bg-color': props.bgColor, '--after-color': props.afterColor, '--after-bgcolor': props.afterBgColor }} >{props.title}</h3>
            <p className={classes.content} style={{ '--after-color': props.afterColor, '--after-bgcolor': props.afterBgColor }}>{props.mycontent}</p>
        </div>
    )
}
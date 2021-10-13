import React from 'react'
import styles from '../styles/Header.module.scss'
import Link from 'next/link'

function NavButton(props) {
    return (
        <p className={styles.navButton} onClick={props.onclick}>
        <Link href={props.link}>{props.name}</Link>
        </p>
    )
}

export default NavButton
import React, { useState , useEffect} from 'react'
import styles from '../styles/Header.module.scss'
import { FaAngleUp, FaBars, FaTimes } from 'react-icons/fa'
import NavButton from './NavButton'
function Header() {
    const [toggle, setToggle] = useState(false)
    const [scrollPosition, setScrollPosition] = useState(0);
    const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollPosition(position);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    });
    return (
        <nav className={scrollPosition > 20 ? styles.navbar : styles.navbar1} >
            <header className={styles.maxWidth}>
                <p className={styles.logo}>Portfo<span>lio.</span></p>
                <nav className={toggle ? styles.nav1 : styles.nav}>
                    <FaTimes className={styles.fatimes} onClick={() => { setToggle(!toggle) }} />
                    <NavButton link='#Home' name='Home' onclick={() => { setToggle(false) }} />
                    <NavButton link='#About' name='About' onclick={() => { setToggle(false) }} />
                    <NavButton link='#Services' name='Services' onclick={() => { setToggle(false) }} />
                    <NavButton link='#Skills' name='Skills' onclick={() => { setToggle(false) }} />
                    <NavButton link='#Portfolio' name='Portfolio' onclick={() => { setToggle(false) }} />
                    <NavButton link='#Contact' name='Contact' onclick={() => { setToggle(false) }}/>
                </nav>
                <FaBars className={styles.fabars} onClick={() => { setToggle(!toggle) }} />
            </header>
           <div onClick={() => {window.scroll({top: 0, left: 0, behavior: 'smooth' })}} className={scrollPosition > 300 ? styles.angleUp : styles.angleUpHide}> <FaAngleUp className={styles.angleUpIcon}/> </div>
        </nav>
    )
}

export default Header
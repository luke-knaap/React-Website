import {NavLink } from 'react-router-dom'
import styles from './Header.module.css'
function Header() {
    return (
        <header className={styles.header}>
            <h1>React Oefenen</h1>
            <div className={styles.info}>
                <li><NavLink to= "/" className={({isActive}) => isActive ?
                styles.activeLink : undefined}>Home
                </NavLink></li>
                <li><NavLink to= "/about" className={({isActive}) => isActive ?
                styles.activeLink : undefined}>About
                </NavLink></li>
                <li><NavLink to= "/contact" className={({isActive}) => isActive ?
                styles.activeLink : undefined}>Contact
                </NavLink></li>   
            </div>
            <hr className={styles.line}/>
        </header>
    )
}

export default Header
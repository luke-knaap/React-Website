import styles from './Header.module.css'
function Header() {
    return (
        <header className={styles.header}>
            <h1>React Oefenen</h1>
            <div className={styles.info}>
                <li> <a href="">Home</a></li>
                <li> <a href="">About</a></li>              
                <li> <a href="">Contact</a></li>
                <li> <a href="">Hallo</a></li>
            </div>
            <hr className={styles.line}/>
        </header>
    )
}

export default Header
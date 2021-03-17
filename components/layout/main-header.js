import Link from "next/link"
import styles from './main-header.module.css';

const MainHeader = props => {
return <header className={styles.header}>
    <div className={styles.logo}> 
        <Link href='/'>My Party People</Link>
    </div>
    <nav className={styles.navigation}>
        <ul>
            <li>
                <Link href='/events'>All Events</Link>
            </li>
        </ul>
    </nav>
</header>
}

export default MainHeader;
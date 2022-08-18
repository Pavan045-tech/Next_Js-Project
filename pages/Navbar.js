import Link from "next/link";
import styles from '../styles/Navbar.module.css';

export default function Navbar(){
    return(
        <div className={styles.main}>
            <ul className="Navbar">
                <Link href="#">Home</Link>
                <Link href="/login">about</Link>
                <Link href="#">Portfolio</Link>
                <Link href="#">contact</Link>
            </ul>
        </div>
    );
}
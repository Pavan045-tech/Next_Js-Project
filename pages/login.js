import Link from 'next/link';
import styles from '../styles/Navbar.module.css';

export default function Login(){
    return(
        <div className={styles.main2}>
            <h1 className={styles.heading}>Log in</h1>
            <input className={styles.input} placeholder="Enter ur Username"></input>
            <Link href='/'><button>Submit</button></Link>
        </div>
    );
}
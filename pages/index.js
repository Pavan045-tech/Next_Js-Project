import styles from '../styles/Home.module.css';
import Navbar from './Navbar';
import Image from 'next/image';
import Pic from '../public/Image.jpg';
import Login from './login';

export default function Home() {


  return (
    <div className={styles.Main}>
      <div>
      <Image src={Pic} alt="Picture of the author"
        width={950}
        height={950} layout="intrinsic"></Image></div>
      <div  className="main"><h1 style={{color:"green"}}>Welcome to Next.js</h1>
      <Navbar/><Login/></div>
    </div>
  )
}

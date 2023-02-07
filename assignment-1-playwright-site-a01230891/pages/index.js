import {useState} from 'react'
import MenuPopup from './comps/menu';
import styles from '../styles/Home.module.css'

export default function Home() {
  
  const [menu, setMenu] = useState(false);

  return (

    <main className={styles.home}>


      <header>
        <title>Home</title>
        <meta name="author" content="MDIA 2109" />
        <meta property='og:title' content='Assignment #1 - Home Page'/>
        <meta property='og:description' content='BCIT Digital Design and Development Diploma'/>
        <link rel="icon" href='/favicon.png' />
      </header>
        

        
      <nav className={styles.topNav}>
                <div>
                <img onClick={() => setMenu(!menu)} src='/icons/menu-icon.png' width={'55px'}/>
                { menu ? <MenuPopup/> : null }
                </div>
                <a  href='/'>
                <img src='/favicon.png' width={'75px'}/>
                </a>
            </nav>

        <nav className={styles.bottomNav}>
          <a href='about'>
            <span>
              <img src="/icons/downwardArrow.png" width={'55px'}/>
            </span>
          </a>
        </nav>

        <div className={styles.container}>
        <div className={styles.homeContainer}>
          <header>
            <h1>An investment in knowledge pays the best interest.</h1>
          </header>
            <hr className={styles.divider}></hr>
            <p>Different than a college or university, the British Columbia Institute of Technology offers practical, flexible, applied education with instructors who have direct, hands-on experience in their field.</p>
            <a  href="about"><button className={styles.button} >More About Us</button></a>
            <a  href="contact"><button className={styles.button}>Contact Us</button></a>
        </div>

      
      </div>
    </main>
  )
}

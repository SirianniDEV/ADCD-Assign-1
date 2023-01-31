import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.main}>

      <header>
        <title>Home</title>
        <meta name="author" content="MDIA 2109" />
        <meta property='og:title' content='Assignment #1 - Home Page'/>
        <meta property='og:description' content='BCIT Digital Design and Development Diploma'/>
        <link rel="icon" href='/favicon.png' />
      </header>

      <main>

        <div className={styles.intro}>
          <header>
            <h1>An investment in knowledge pays the best interest.</h1>
          </header>
            <hr></hr>
            <p>Different than a college or university, the British Columbia Institute of Technology offers practical, flexible, applied education with instructors who have direct, hands-on experience in their field.</p>
            <a href="about"><button>More About Us</button></a>
            <a href="contac"><button>Contact Us</button></a>
        </div>
      </main>

      <nav>
        
        <img src='/icons/menu-icon.png'/>
        <img src='/favicon.png'/>

        <a href='about'>
          <span>
            <img src="/icons/downwardArrow.png"/>
          </span>
        </a>
       
      </nav>

    </div>
  )
}

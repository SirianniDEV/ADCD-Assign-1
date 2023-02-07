import styles from '../styles/Home.module.css'
import MenuPopup from './comps/menu'
import {useState} from 'react';

export default function Contact(){
    
    const [menu, setMenu] = useState(false);

    return (
        <main className={styles.contact}>
             <header>
                <title>Contact Us</title>
                <meta name="author" content="MDIA 2109" />
                <meta property='og:title' content='Assignment #1 - Contact Us Page'/>
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
                <a href='/about'>
                <span>
                <img src="/icons/upwardArrow.png" height="50px"/>
                </span>
                </a>
             </nav>

            <div>
                <div className={styles.Title}>
                    <hr className={styles.divider}/>
                    <h1 className={styles.header} >Contact Us</h1>
                    <hr className={styles.divider}/>
                </div>


                <div className={styles.contactContainer}>
                <p className={styles.header}> Want to discuss? Let's chat!</p>

                    <form >
                        <fieldset className={styles.contactForm}>
                            <table >
                                <thead>
                                    <tr>
                                        <div className={styles.contactFormName}>
                                            <div className={styles.contactFormNameContainer}>
                                            <label className={styles.contactFormLabel}>First Name:</label>
                                            <input className={styles.contactFormNameInput} type="text" id="fname" name="fname" placeholder="First Name here"></input>
                                            </div>

                                            <div className={styles.contactFormNameContainer} >
                                            <labe className={styles.contactFormLabel}>Last Name:</labe>
                                            <input className={styles.contactFormNameInput} type="text" id="lname" name="lname" placeholder="Last Name here"></input>
                                            </div>
                                        </div>
                                    </tr>
                                </thead>
                                <thead>
                                    <tr className={styles.contactFormEmail}>
                                        <div className={styles.contactFormEmailContainer}>
                                        <label className={styles.contactFormLabel}>Email:</label> <br/>
                                        <input className={styles.contactFormEmailInput} type="text" id="email" name="email" placeholder="Email here" ></input>
                                        </div>
                                    </tr>
                                </thead>
                            </table>
                        </fieldset>
                    </form>
                </div>
            </div>
        </main>
    )
}
import styles from '../../../styles/Home.module.css'
import {useState} from 'react'

export default function MenuPopup() {

    const [menuX, setMenuX] = useState(true);

    return (
        <>
        {menuX ? <div className={styles.menu}>
         <h1 onClick={() => setMenuX(!menuX)} src='/icons/menu-icon.png'>X </h1> 
        <ul className={styles.menuNav}>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        </ul>
        </div>
        : null }
        </>
    )
}
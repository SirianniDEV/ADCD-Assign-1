import styles from '../styles/Home.module.css'
import {useState} from 'react'

export default function About(){

        const [next, setNext] = useState(1);

        const handleLeftArrow=()=>{
        if(next===1){
            setNext(5);
        }
        else{
        setNext(next-1);
        }
        }
    
        const handleRightArrow=()=>{
        if(next===5){
            setNext(1);
        }
        else{
            setNext(next+1);
        }
        }
    
        const goToSlide1=()=>{
        setNext(1);
        }
    
        const goToSlide2=()=>{
        setNext(2);
        }
    
        const goToSlide3=()=>{
        setNext(3);
        }

        const goToSlide4=()=>{
        setNext(4);
        }

        const goToSlide5=()=>{
        setNext(5);
        }

    return (
        <main className={styles.about}>
            <header>
                <title> About Us</title>
                <meta name="author" content="MDIA 2109" />
                <meta property='og:title' content='Assignment #1 - About Us Page'/>
                <meta property='og:description' content='BCIT Digital Design and Development Diploma'/>
                <link rel="icon" href='/favicon.png' />
            </header>

            <nav className={styles.topNav}>
                <img src='/icons/menu-icon.png' width={'55px'}/>
                <img src='/favicon.png' width={'75px'}/>
             </nav>

            <div div className={styles.aboutContainer}>


                    <div className={styles.aboutTitle}>
                        <hr className={styles.divider}/>
                        <h1 className={styles.header} >About Us</h1>
                        <hr className={styles.divider}/>
                    </div>

                    <div className={styles.text}>
                        <p> We are proud to deliver an education that goes beyind textbooks and classrooms.</p>
                        <p> Our students gain the technical skils, real-world experince, and problem-solving ability needed to embrace the commplexity and lead innovation in a rapidly changing workforce. </p>
                        <p> Through close collaboration with the industry, our network of alumni and partners continue to acheive global success.</p>

                        <h2>Information Sessions</h2>
                            <p> Informations sessions are a simple way to figure out the next step along your career path. Learn more about the programs that intrest you</p>

                            <h3>Big Info</h3>
                            <p>Big Info is the largest program expo and informatio session at BCIT. It's your chance to find out abbout all our programs - from business, computing, and health to engineering, trades and applied science.</p>
                            <p>If you missed our fall event the next Big Info is schduled to return on Feburary 15, 2023 </p>

                        <h2>Campus Tours</h2>
                            <p>Tours run weekdays September to May, on our Burnaby campus. See BCIT in person and get a taste of campus life.</p>
                    </div>


                    {/* <!-- Slideshow container --> */}
                    <div className={styles.carouselContainer}>

                    {/* <!-- Full-width images with number and caption text --> */}
                    {next===1&&<div className={styles.carouselImage} >
                        <img src="/carousel-images/0.jpg" width="400px" height="200px"/>
                        <div className={styles.textOnImageHere}>Achieve Excellence</div>
                    </div>}

                    {next===2&&<div className={styles.carouselImage}>
                        <img src="/carousel-images/1.jpg" width="400px" height="200px" />
                        <div className={styles.textOnImageHere}>Embrace innovation</div>
                    </div>}

                    {next===3&&<div className={styles.carouselImage}>
                        <img src="/carousel-images/2.jpg" width="400px" height="200px"/>
                        <div className={styles.textOnImageHere}>Champion Diversity</div>
                    </div>}

                    {next===4&&<div className={styles.carouselImage}>
                        <img src="/carousel-images/3.jpg" width="400px" height="200px"/>
                        <div className={styles.textOnImageHere}>Pursue Collaboration</div>
                    </div>}

                    {next===5&&<div className={styles.carouselImage}>
                        <img src="/carousel-images/4.jpg" width="400px" height="200px"/>
                        <div className={styles.textOnImageHere}>Engage with Respect</div>
                    </div>}

                    <a className={styles.carouselRightArrow} onClick={handleRightArrow}>
                        <img className={styles.carouselRightArrow} src="/icons/rightArrow.png"/>
                    </a>
                    <a className={styles.carouselLeftArrow}  onClick={handleLeftArrow}>
                    <img className={styles.carouselLeftArrow} src="/icons/leftArrow.png"/>
                    </a>
                    </div>


                    <div>

                        <div className={styles.aboutTitle}>
                            <hr className={styles.divider}/>
                            <h1 className={styles.header} >Departments</h1>
                            <hr className={styles.divider}/>
                        </div>
                        </div>

                            <ul className={styles.list}>
                                <li>Applied & Natural Sciences</li>
                                <li>Business & Media</li>
                                <li>Computing & IT</li>
                                <li>Engineering</li>
                                <li>Health Sciences</li>
                                <li> Trades & Apprenticeships</li>
                            </ul>

            </div>

            <nav className={styles.bottomNav}>

            <a href='/'>
                <span>
                    <img src="/icons/upwardArrow.png"/>
                </span>
            </a>

            <a href='contact'>
                <span>
                    <img src="/icons/downwardArrow.png"/>
                </span>
            </a>
       
            </nav>
        </main>
    )
}
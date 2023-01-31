export default function Contact(){
    return (
        <div>
             <header>
                <title>Contact Us</title>
                <meta name="author" content="MDIA 2109" />
                <meta property='og:title' content='Assignment #1 - Contact Us Page'/>
                <meta property='og:description' content='BCIT Digital Design and Development Diploma'/>
                <link rel="icon" href='/favicon.png' />
            </header>
            <main>
                <header>
                    <h1>Contact Us</h1>
                </header>

                <p>Want to discuss? Let's chat!</p>

                <div>

                    <form>
                        <fieldset>
                            <table>
                                <thead>
                                    <tr>
                                        <input type="text" id="fname" name="fname" placeholder="First Name here"></input>
                                        <input type="text" id="lname" name="lname" placeholder="Last Name here"></input>
                                    </tr>
                                </thead>
                                <thead>
                                    <tr>
                                        <input type="text" id="email" name="email" placeholder="Email here" ></input>
                                    </tr>
                                </thead>
                            </table>
                        </fieldset>
                    </form>
                </div>

            </main>
            <nav>

                <img src='/icons/menu-icon.png'/>
                <img src='/favicon.png'/>

                <a href='about'>
                    <span>
                        <img src="/icons/upwardArrow.png"/>
                    </span>
                </a>
       
            </nav>
        </div>
    )
}
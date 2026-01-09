import styles from "./index.module.css"
import Header from "../../components/header/header.jsx"
import Footer from "../../components/footer/footer.jsx"
import Banner from "../../components/banner/main-banner.jsx"
import AboutMe from '../../components/about-me/about-me.jsx'
import Carousel from '../../components/carousel/carousel.jsx'
import StackColumn from '../../components/tech-stack/tech-stack.jsx'
import ContactMe from "../../components/contact-me/contact-me.jsx"

export default function Home() {

    
    return <div className={` ${styles.main} ${styles.container}`}>
        <div className={` ${styles.content} ${styles.container}`}>
            <Header/>
            <Banner/>
            <AboutMe/>
            <section className={` ${styles.featured} ${styles.container}`}>
            <h1 id="featured-projects" className={styles['section-header']}>
                Featured Projects
            </h1>
            
            </section>
            <section className={` ${styles.tech} ${styles.container}`}>
                <div className={styles['section-header-container']}>
                    <hr/>
                    <h1 id="tech-stack" className={styles['section-header']}>
                        Tech Stack
                    </h1>
                    <hr/>
                </div>
                <div className={` ${styles.container} ${styles['tech-stack-content']}`}>
                    <StackColumn 
                    title={'Front-end'}
                    item1={'HTML'}
                    item2={'CSS'}
                    item3={'JavaScript'}
                    item4={'React & Vite'}
                    />
                    <StackColumn
                    title={'Back-end'}
                    item1={'Node.js'}
                    />
                    <StackColumn 
                    title={'Tools/IDE'}
                    item1={'Visual Studio Code'}
                    item2={'Android Studio'}
                    item3={'Sublime Text'}
                    />
                    <StackColumn 
                    title={'Databases'}
                    item1={'MySQL'}
                    />
                </div>
            </section>
            <section className={` ${styles.contact} ${styles.container}`}>
                <div className={styles['contact-me-header']}>
                    <hr/>
                        <p id="contact" className={styles.header}>Contact</p>
                    </div>
                <ContactMe/>
            </section>
            <Footer/>
            
        </div>
    </div>
}
import styles from "./index.module.css";
import Header from "../../components/header/header.jsx";
import Footer from "../../components/footer/footer.jsx";
import Banner from "../../components/banner/main-banner.jsx";
import AboutMe from '../../components/about-me/about-me.jsx';
import StackColumn from '../../components/tech-stack/tech-stack.jsx';
import ContactMe from "../../components/contact-me/contact-me.jsx";
import ProjectItem from '../../components/project-item/project-item.jsx';

/* Animations */
import { easeOut, motion } from 'motion/react'
import RightToLeft from "../../assets/animations/right-to-left.jsx";
import LeftToRight from "../../assets/animations/left-to-right.jsx";
import LineSpan from "../../assets/animations/line-span-1.jsx";
import LineSpan2 from "../../assets/animations/line-span-2.jsx";
import LineSpanVertical from "../../assets/animations/line-span-vertical.jsx";

export default function Home() {

    return <div id="canvas-bg" className={` ${styles['main-container']} ${styles.container}`}>
        <hr className={` ${styles.central} ${styles.divider}`}/>
        <hr className={`${styles['left']} ${styles.divider}`}/>
        <hr className={`${styles['right']} ${styles.divider}`}/>
            <section className={`${styles['header-container']} ${styles.container}`}>
                <Header/>
            </section>
            <section className={`${styles['banner-container']} ${styles.container}`}>
                <Banner/>
            </section>
            <section className={`${styles['about-me-container']} ${styles.container}`}>
                <AboutMe/>
            </section>
            <section className={` ${styles['projects-container']} ${styles.container}`}>
                <div className={styles['projects-header']}>
                    <motion.hr
                    variants={ LineSpan }
                    initial='initial'
                    whileInView='whileInView'
                    transition={{ duration: 3}}
                />
                <motion.h1 id="featured-projects" className={`${styles['projects-section-header']}`}
                    variants={ RightToLeft }
                    initial='initial'
                    whileInView='whileInView'
                    transition={{ duration: 0.75, ease: easeOut}}
                >
                    Projects
                </motion.h1>
                </div>
                <div className={styles['projects-content']}>
                    <ProjectItem
                        img={'card-covers/hex-color.png'}
                        alt={'hexadecimal->color converter banner'}
                        alignment={'flex-end'}
                        textAlignment={'flex-end'}
                        title={'HEX TO COLOR CONVERTER'}
                        description={'A local conversion website that converts hexadecimal values into its color equivalent (including a breakdown of input into three RGB sections). Primarily runs on HTML, CSS, and Javascript.'}
                        liveUrl={'https://danskyvich.github.io/hexadecimal-to-color-converter/'}
                        githubUrl={'https://github.com/danskyvich/hexadecimal-to-color-converter'}
                        timeSpan={'June - December 2025'}
                        techUsed={['HTML', 'CSS', 'JAVASCRIPT']} 
                    />
                    <ProjectItem
                        img={'card-covers/tokuen-web.png'}
                        alt={'tokuen-web-app-banner'}
                        alignment={'flex-end'}
                        textAlignment={'flex-end'}
                        title={'TOKUEN WEB APPLICATION'}
                        description={'The front-end interface of the TOKUEN web application for the startup Artiphix, utilizing frontend frameworks such as React + Vite, and scripting languages such as Typescript.'}
                        liveUrl={'#'}
                        githubUrl={'https://github.com/danskyvich/tokn-web'}
                        timeSpan={'December 2025 - present'}
                        techUsed={['REACT', 'TYPESCRIPT', 'NODEJS', 'TAILWINDCSS']} 
                    />
                </div>
            </section>
            <section className={` ${styles['tech-stack-container']} ${styles.container}`}>
                {/* Header */}
                <div className={styles['tech-stack-header']}>
                    <motion.h1 id="tech-stack" className={` ${styles['tech-stack-header-text']} ${styles['header-line-height']}`}
                        variants={ LeftToRight }
                        initial='initial'
                        whileInView='whileInView'
                        transition={{ duration: 0.75, ease: easeOut}}
                    >Tech <br/>Stack</motion.h1>
                    <motion.hr
                        variants={ LineSpan2 }
                        initial='initial'
                        whileInView='whileInView'
                        transition={{ duration: 3}}
                    />
                </div>

                <div className={styles['tech-stack-content']}>
                    <section className={styles['tech-stack-columns']}>
                    <StackColumn 
                    title={'Front-end'}
                    item1={'HTML'}
                    item2={'CSS'}
                    item3={'JavaScript'}
                    item4={'React & Vite'}
                    item5={'Javascript'}
                    item6={'Typescript'}
                    />
                    <motion.hr
                        variants={ LineSpanVertical }
                        initial='initial'
                        whileInView='whileInView'
                        transition={{ delay: 0.25, duration: 3, ease: easeOut}}
                    />
                    <StackColumn
                    title={'Back-end'}
                    item1={'Node.js'}
                    item2={'PHP'}
                    item3={'Java & Groovy'}
                    />
                    <StackColumn 
                    title={'Tools/IDE'}
                    item1={'Visual Studio Code'}
                    item2={'Android Studio'}
                    item3={'Sublime Text'}
                    />
                    <motion.hr
                        variants={ LineSpanVertical }
                        initial='initial'
                        whileInView='whileInView'
                        transition={{ delay: 0.25, duration: 3, ease: easeOut}}
                    />
                    <StackColumn 
                    title={'Databases'}
                    item1={'MySQL'}
                    />
                    </section>
                </div>
                    
                <hr/>
            </section>
            <section className={` ${styles['contact-me-container']} ${styles.container}`}>
                <div className={`${styles['contact-me-section-header']} ${styles['header-line-height']}`}>
                    <motion.hr
                        variants={ LineSpan }
                        initial='initial'
                        whileInView='whileInView'
                        transition={{ duration: 3 }}
                    />
                    <motion.p id="contact" className={styles['contact-me-header']}
                        variants={ RightToLeft }
                        initial='initial'
                        whileInView='whileInView'
                        transition={{ duration: 0.75, ease: easeOut}}
                    >Contact <br/> me</motion.p>
                </div>
                <ContactMe/>
            </section>
            <Footer/>
    </div>
}
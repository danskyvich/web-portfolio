import styles from './about-me.module.css'
import { motion, easeOut } from 'motion/react'
import scaleWords from '../../assets/animations/scale-large.jsx'
import RightToLeft from '../../assets/animations/right-to-left.jsx'
import LineSpan from '../../assets/animations/line-span-1.jsx'

const AboutMe = () => {

    const DownToUp = {
        initial: { opacity: 0, y: 50},
        whileInView: { opacity: 1, y: 0},
    }

    return <>
        <section className={styles['about-me-container']}>
            <div className={styles['about-me-header']}>
                <motion.hr
                    variants={ LineSpan }
                    initial='initial'
                    whileInView='whileInView'
                    transition={{ duration: 3 }}
                />
                <motion.p className={` ${styles['about-me-section-header']} ${styles.text} `}
                    variants={ RightToLeft }
                    initial='initial'
                    whileInView='whileInView'
                    transition={{ duration: 0.75, ease: easeOut}}
                >About <br/>me</motion.p>
            </div>
            
            <motion.div className={` ${styles['about-me-content']} ${styles.text}`}
                variants={ DownToUp }
                initial='initial'
                whileInView='whileInView'
                transition={{ duration: 0.75, ease: easeOut}}
            >
                <p className={`${styles['about-me-text']} ${styles.title} ${styles.text}`}>
                    Hi! I'm <span id={styles['highlight']}>Danilo</span>,
                    a fullstack Engineer that focuses on creating <></>
                    <motion.span variants={scaleWords} initial="begin" whileHover='animated' transition='time' id={styles.colored} > lorem ipsum </motion.span>, <></> 
                    <motion.span variants={scaleWords} initial="begin" whileHover='animated' transition='time' id={styles.colored}> consectetur </motion.span>, and <></>
                    <motion.span variants={scaleWords} initial="begin" whileHover='animated' transition='time' id={styles.colored}> adipiscing </motion.span> websites.
                </p> 

                <p className={`${styles['about-me-text']} ${styles.subtitle} ${styles.text}`}>
                    When I'm not working, you can find me strolling for new cafes in Espana, writing stories on Wattpad, or watching Heated Rivalry :)
                </p>
            </motion.div>
        </section>
    </>
}
export default AboutMe;
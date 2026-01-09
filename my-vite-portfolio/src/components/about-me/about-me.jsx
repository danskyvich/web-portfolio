import styles from './about-me.module.css'
import { motion } from 'motion/react'
import scaleWords from '../../assets/animations/scale-large.jsx'

const AboutMe = ({ref}) => {

    return <>
        <motion.section className={styles['about-me-container']}
            viewport={{ root: ref}}
        >
            <div className={styles['about-me-header']}>
                <hr/>
                <p className={` ${styles['about-me-p']} ${styles.text} `}>About <br/>me</p>
            </div>
            <div className={` ${styles['about-me-main-p-centered']} ${styles.text}`}>
                <p className={`${styles['about-me-main-p']} ${styles.p1} ${styles.text}`}>
                    Hi! I'm <span id={styles['highlight']}>Danilo</span>,
                    a fullstack Engineer that focuses on creating <></>
                    <motion.span variants={scaleWords} initial="begin" whileHover='animated' transition='time'> lorem ipsum </motion.span>, <></> 
                    <motion.span variants={scaleWords} initial="begin" whileHover='animated' transition='time'> consectetur </motion.span>, and <></>
                    <motion.span variants={scaleWords} initial="begin" whileHover='animated' transition='time'> adipiscing </motion.span> websites.
                </p> 

                <p className={`${styles['about-me-main-p']} ${styles.p2} ${styles.text}`}>
                    When I'm not working, you can find me strolling for new cafes in Espana, writing stories on Wattpad, or watching Heated Rivalry :)
                </p>
            </div>
        </motion.section>
    </>
}
export default AboutMe;
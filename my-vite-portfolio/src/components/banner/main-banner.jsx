import styles from "./main-banner.module.css"
import { easeOut, motion } from 'motion/react'
import RightToLeft from "../../assets/animations/right-to-left"
import LeftToRight from "../../assets/animations/left-to-right"

const Banner = ({ref}) => {

    return <div className={styles['banner-content-container']}>
        <div className={` ${styles['banner-left']} ${styles['side']}`}>
            <motion.p className={styles['banner-text']}
                variants={ LeftToRight }
                initial='initial'
                whileInView='whileInView'
                viewport='viewport'
                transition={{ delay: 0.5, duration: 0.75, ease: easeOut }}
            >
                I'm a 
                </motion.p>

            <motion.span id={styles.important}
                variants={ RightToLeft }
                initial="initial"
                whileInView="whileInView"
                viewport='viewport'
                transition={{ delay: 0.5, duration: 0.75, ease: easeOut }}
            >FULLSTACK <br/>

                <span id={styles['highlight']}>DEVELOPER</span>
            </motion.span>

            <motion.p className={styles['banner-text']}
                variants={ LeftToRight }
                initial='initial'
                whileInView='whileInView'
                viewport='viewport'
                transition={{ delay: 0.5, duration: 0.75, ease: easeOut }}
            > that visualizes, designs, and implements web applications as a means to solve real-world problems.</motion.p>

            <motion.a href="#featured-projects" className={styles['view-my-works-button']}
                variants={ RightToLeft }
                initial='initial'
                whileInView='whileInView'
                transition={{ delay: 0.25, duration: 1}}
            >VIEW MY WORK</motion.a>
        </div>

        <div className={` ${styles['banner-right']} ${styles['side']}`}/>
    </div>
}

export default Banner;
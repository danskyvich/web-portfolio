import styles from "./main-banner.module.css"
import { easeOut, motion } from 'motion/react'
import RightToLeft from "../../assets/animations/right-to-left"
import LeftToRight from "../../assets/animations/left-to-right"

const Banner = ({ref}) => {

    return <div className={styles['banner-content-container']}>
        <motion.p className={styles['banner-text']}
                variants={ LeftToRight }
                initial='initial'
                whileInView='whileInView'
                viewport='viewport'
                transition={{ delay: 0.5, duration: 0.75, ease: easeOut }}
            >
                I'm a 
                </motion.p>

            <motion.p id={styles.important}
                variants={ LeftToRight }
                initial="initial"
                whileInView="whileInView"
                viewport='viewport'
                transition={{ delay: 0.5, duration: 0.75, ease: easeOut }}
            >FRONT-END <br/>
            </motion.p>
            <motion.p id={styles['highlight']}
                variants={ LeftToRight }
                initial="initial"
                whileInView="whileInView"
                viewport='viewport'
                transition={{ delay: 0.5, duration: 0.75, ease: easeOut }}
            >DEVELOPER</motion.p>
        
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
}

export default Banner;
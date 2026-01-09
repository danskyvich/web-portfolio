import styles from "./main-banner.module.css"
import { motion } from 'motion/react'

const Banner = ({ref}) => {

    return <motion.div className={styles['self-pic-container']}
        viewport={{ root: ref}}
    >
       <p className={styles['banner-text']}id={styles.upper}>I'm a </p>
       <span id={styles.important}>Full-stack Engineer</span>
       <p className={styles['banner-text']}id={styles.lower}> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean mauris libero.</p>
       <hr/>
    </motion.div>
}

export default Banner;
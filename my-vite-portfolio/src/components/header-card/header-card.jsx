import styles from './header-card.module.css'
import { motion } from 'motion/react'

const HeaderCard = ({url, title, lineColor, textColor}) => {

    return <motion.div
        whileHover="hover"
        className={styles['header-card-container']}
    >
        <a className={styles['header-link']} style={{ color: textColor}}href={url}>
            {title}
        </a>
        <motion.div
            className={styles["header-underline"]}
            initial={{ scaleX: 0, backgroundColor: lineColor }}
            variants={{
                hover: { scaleX: 1, backgroundColor: lineColor}
            }}
            transition={{ duration: 0.3, ease: "easeOut"}}
        >

        </motion.div>
    </motion.div>
}

export default HeaderCard;
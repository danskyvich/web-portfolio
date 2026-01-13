import { motion } from 'motion/react'
import styles from './social-link-row.module.css'

const SocialLinkRow = ({title, url}) => {
    return <motion.div className={styles['social-link-item']}
        whileHover="hover"
        >
        <a href={url} className={styles['social-link']} target="_blank" rel="noopener noreferrer">
            <motion.span id={styles.arrow}
                initial={{ opacity: 0 }}
                variants={{
                    hover: { opacity: 1, color: '#ed0d8cff' }
                }}
                transition={{ duration: 0.05, ease: 'easeOut'}}
                
            >&#8658;</motion.span> {title}</a>
    </motion.div>
}

export default SocialLinkRow;
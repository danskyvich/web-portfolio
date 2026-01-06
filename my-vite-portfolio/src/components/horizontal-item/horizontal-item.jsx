'use client'
import styles from './horizontal-item.module.css'
import { motion } from 'motion/react'
import fadeInMotion from '../../assets/animations/fade-in-card.jsx'

const HorizontalCard = ({title, content, url, src, borderAttributes, alt}) => {
    return <motion.a href={url} className={styles['horizontal-container']} target="_blank" rel="noopener noreferrer"
            style={{ color: "#ffffff", border: borderAttributes}}
        /* use variants attribute to import reusable motion components */
            variants={fadeInMotion} 
            initial="initial"
            whileInView="whileInView"
            whileHover={{ y: -10, color: 'rgb(0, 57, 92)', backgroundColor: '#ffffff', transition: { duration: 0.1}}}
            whileTap={{ y: -10, color: '#ffffff', backgroundColor: 'rgb(0, 57, 92)', transition: { duration: 0.1}}}
            transition="transition"
            viewport="viewport">
                <img className={styles['horizontal-container-img']} src={src} alt={alt}/>
                <div className={styles['horizontal-container-text']}>
                    <p id={styles.title}><b>{title}</b></p> 
                    <p id={styles.content}><i>{content}</i></p>
                </div>
    </motion.a>
}

export default HorizontalCard;
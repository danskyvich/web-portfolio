'use client'
import styles from './item-card.module.css'
import { motion } from 'motion/react'
import fadeInMotion from '../../assets/animations/fade-in-card.jsx'

const ItemCard = ({title, content, bgColor, textColor, img, url, borderAttributes, alt, moreInfo}) => {
    return (
        <motion.a className={styles['item-card-container']} href={url} target="_blank" rel="noopener noreferrer" 
        style={{backgroundColor: bgColor, color: textColor, border: borderAttributes}}
        
        /* use variants attribute to import reusable motion components */
        variants={fadeInMotion}
        initial="initial"
        whileInView="whileInView"
        whileHover={{ y: -10, boxShadow: '3px 4px #3d3d3dff'}}
        transition="transition"
        viewport="viewport"
        >
            <img src={img} alt={alt}/>
            <div className={styles.text}>
                <p id={styles['item-title']}><b>{title}</b></p>
                <p id={styles['item-content']}><b>{content}</b></p>
            </div>
            <p id={styles['more-info-text']}><b>{moreInfo}</b></p>
        </motion.a>
    )
}

export default ItemCard;
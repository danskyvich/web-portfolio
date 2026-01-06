import styles from './header-card.module.css'
import { motion } from 'motion/react'

const HeaderCard = ({url, title, bgColor, textColor, align}) => {
    return <motion.a type="button" href={url} className={styles['header-card-container']} style={{backgroundColor: bgColor, color: textColor, alignSelf: align}}
        
    ><b>{title}</b></motion.a>
}

export default HeaderCard;
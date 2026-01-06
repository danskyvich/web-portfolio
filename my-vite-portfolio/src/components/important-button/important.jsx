import styles from './important.module.css'
import { motion } from 'motion/react'

const ImportantButton = ({url, title}) => {
    return <motion.a className={styles['important-button']} href={url}
        whileHover={{ backgroundColor: '#000000', color: '#ffffff', transition: {duration: 0.1}}}
    ><b>{title}</b></motion.a>
}

export default ImportantButton;
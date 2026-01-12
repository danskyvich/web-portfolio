import styles from './tech-stack.module.css'
import { motion } from 'motion/react'

export default function StackColumn({title, item1, item2, item3, item4, item5, item6, item7, item8}){
    return <>
        {/* Content */}
        <motion.div className={styles['stack-column']}
            initial={{ y: 20, opacity: 0}}
            whileInView={{ y: 0, opacity: 1}}
            transition = {{ transform: { duration: 0.5}}}
        >
        <span className={styles.behind}/>
        <span className={` ${styles['stack-header']} ${styles.text}`}>{title}</span>
        <ul>
            <li className={` ${styles['stack-list-item']} ${styles.text}`}>{item1}</li>
            <li className={` ${styles['stack-list-item']} ${styles.text}`}>{item2}</li>
            <li className={` ${styles['stack-list-item']} ${styles.text}`}>{item3}</li>
            <li className={` ${styles['stack-list-item']} ${styles.text}`}>{item4}</li>
            <li className={` ${styles['stack-list-item']} ${styles.text}`}>{item5}</li>
            <li className={` ${styles['stack-list-item']} ${styles.text}`}>{item6}</li>
            <li className={` ${styles['stack-list-item']} ${styles.text}`}>{item7}</li>
            <li className={` ${styles['stack-list-item']} ${styles.text}`}>{item8}</li>
        </ul>
    </motion.div>
    </>
}
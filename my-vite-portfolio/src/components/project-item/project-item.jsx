import styles from './project-item.module.css'

export default function ProjectItem() {
    return <div className={styles['project-item-container']}>
            <div className={` ${styles['project-left']} ${styles.side}`}>

            </div>
            <div className={` ${styles['project-right']} ${styles.side}`}>
                
            </div>
        </div>
}
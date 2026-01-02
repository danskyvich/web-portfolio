import styles from './footer.module.css'

export default function Footer() {
    return <div className={styles.footer}>
        <div className={styles['footer-text']}>
            <p><span id={styles['text-design-1']}>Copyright @ 2025 -- </span> 
                <a href="https://github.com/danskyvich" target="_blank" rel="noopener noreferrer" 
                    link="">Danilo Pelin
                </a>
            </p>
            <p><span id={styles['text-design-1']}>Personal Portfolio</span></p>
            <hr></hr>
        </div>

        <div className={styles['your-info-container']}> 
            <div className={` ${styles['your-info-container']} ${styles.email} `}>
                <p className={styles.label}>Email</p>
                <p className={styles.content}>danilocanabanopelinjr@gmail.com</p>
            </div>
            <div className={` ${styles['your-info-container']} ${styles.number} `}>
                <p className={styles.label}>Phone</p>
                <p className={styles.content}>+63 928 378 2089</p>
            </div>
            <div className={` ${styles['your-info-container']} ${styles.location} `}>
                <p className={styles.label}>Location</p>
                <p className={styles.content}>📍Quezon City, NCR, Philippines</p>
            </div>
        </div>
    </div>
}
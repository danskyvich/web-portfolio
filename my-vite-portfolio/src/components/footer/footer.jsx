import styles from './footer.module.css'

export default function Footer() {
    return <div className={styles['footer-container']}>
        <div className={styles['footer-text']}>
            <p>Copyright @ 2025 -- <a className={styles['github-a']}href="https://github.com/danskyvich" target="_blank" rel="noopener noreferrer">Danilo Pelin</a></p>
            <p>My personal portfolio, made w/ luv</p>
            <hr/>
        </div>
        <div className={styles['footer-socials']}>
            <div className={styles.email}>
                <p id={styles.label}>Email</p>
                <p id={styles.content}>danilocanabanopelinjr@gmail.com</p>
            </div>
            <div className={styles.phone}>
                <p id={styles.label}>Phone</p>
                <p id={styles.content}>(+63) 9283782089</p>
            </div>
            <div className={styles.location}>
                <p id={styles.label}>Location</p>
                <p id={styles.content}>📍Quezon City, NCR, 1107</p>
            </div>
        </div>
    </div>
}
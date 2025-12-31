import HeaderCard from '../header/header-card/header-card'
import styles from './footer.module.css'

export default function Footer() {
    return <div className={styles.footer}>
        <p>@ Danilo Pelin, 2025</p>
        <a href="#"><p>Back to top</p></a>
    </div>
}
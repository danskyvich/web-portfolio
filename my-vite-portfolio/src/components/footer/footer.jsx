import styles from './footer.module.css'
import HeaderCard from '../../components/header-card/header-card'

export default function Footer() {
    return <div className={styles['footer-container']}>
        <div className={` ${styles['footer-left']} ${styles.side}`}>
            <p className={styles['footer-left-text']}>Copyright @ 2025</p>
            <p className={styles['footer-left-text']}>Personal portfolio, made with luv</p>

            {/*Social Links*/}
            <div className={styles['footer-links']}>
                <HeaderCard
                    title={'Projects'}
                    url={'#featured-projects'}
                    lineColor={'#ed0d8cff'}
                />
                <HeaderCard
                    title={'Tech stack'}
                    url={'#tech-stack'}
                    lineColor={'#ed0d8cff'}
                />
                <HeaderCard
                    title={'Contacts'}
                    url={'#contact-me'}
                    lineColor={'#ed0d8cff'}
                />
                <HeaderCard/>
            </div>
        </div>
        <div className={` ${styles['footer-right']} ${styles.side}`}>
            <p className={`${styles['footer-right-text']} ${styles.name}`}>DANILO PELIN</p>
            <p className={`${styles['footer-right-text']} ${styles.motto}`}>Coffee + nature = life</p>
        </div>
    </div>
}
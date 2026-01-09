import styles from './footer.module.css'
import HeaderCard from '../../components/header-card/header-card'

export default function Footer() {
    return <div className={styles['footer-container']}>
        <div className={styles['footer-text']}>
            <p>Copyright @ 2025</p>
            <p>My personal portfolio, made w/ luv</p>
            <hr/>
        </div>
        <div className={styles['top-nav-container']}>
            <div className={styles['nav-links']}>
                <HeaderCard
                    title={"Featured"}
                    lineColor={"#ef97efff"}
                    url={'#featured-projects'}
                    />
                <HeaderCard
                    title={"Works"}
                    lineColor={"#ef97efff"}
                    url={'#other-works'}
                    />
                <HeaderCard
                    title={"Tech stack"}
                    lineColor={"#ef97efff"}
                    url={'#tech-stack'}
                    />
                <HeaderCard
                    title={"Contact me"}
                    lineColor={"#ef97efff"}
                    url={'#contact'}
                    />
            </div>
            <div className={styles['your-name']}>
                <p id={styles['name-bold']}>DANILO PELIN</p>
                <p id={styles['motto']}>Life is all about coffee.</p>
            </div>
        </div>
    </div>
}
import styles from './footer.module.css'
import HeaderCard from '../../components/header-card/header-card'

export default function Footer() {
    return <div className={styles['footer-container']}>
        <div className={styles['footer-text']}>
            <p>Copyright @ 2025 -- <a className={styles['github-a']}href="https://github.com/danskyvich" target="_blank" rel="noopener noreferrer">Danilo Pelin</a></p>
            <p>My personal portfolio, made w/ luv</p>
            <hr/>
        </div>
        <div className={styles['top-nav-container']}>
            <div className={styles['nav-links']}>
                <HeaderCard
                    title={"Featured"}
                    lineColor={"#8f8f8f"}
                    />
                <HeaderCard
                    title={"Works"}
                    lineColor={"#8f8f8f"}
                    />
                <HeaderCard
                    title={"Others"}
                    lineColor={"#8f8f8f"}
                    />
                <HeaderCard
                    title={"Tech stack"}
                    lineColor={"#8f8f8f"}
                    />
                <HeaderCard
                    title={"Contacts"}
                    lineColor={"#8f8f8f"}
                    />
            </div>
            <div className={styles['your-name']}>
                <p id={styles['name-bold']}>DANILO PELIN</p>
                <p id={styles['motto']}>Life is all about coffee.</p>
            </div>
        </div>
    </div>
}
import styles from './header.module.css'
import HeaderCard from '../header-card/header-card.jsx'

export default function Header() {
    return (
        <header className={styles['header-container']}>
            <div className={styles.left}>
                <img src="favicon.svg" alt="web-logo"></img>
                <HeaderCard
                    title={"Projects"}
                    url={"#featured-works"}
                    textColor={"black"}
                />
                <HeaderCard
                    title={"Works"}
                    url={"#other-works"}
                    textColor={"black"}
                />
            </div>
            <div className={styles.right}>
                <HeaderCard
                    title={"Contact Me"}
                    url={""}
                    textColor={"white"}
                    bgColor={"black"}
                    width={"9em"}
                />
            </div>
        </header>
    )
}
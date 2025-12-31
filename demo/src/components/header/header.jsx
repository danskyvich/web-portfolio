import HeaderCard from './header-card/header-card'
import styles from './header.module.css'

export default function Header() {
    return <header className={styles.header}>
            <div className={styles['left-side']}>
            <img src="/favicon.svg" />
            <HeaderCard
                url={"/"}
                text={"Featured"}
            />
            <HeaderCard
                url={"/"}
                text={"Works"}
            />
            <HeaderCard
                url={""}
                text={"About me"} />
        </div>
        <div className={styles['right-side']}>
            <HeaderCard
                url={""}
                text={"Contact me"}
                textColor={"white"}
                bgColor={"black"} />
        </div>
    </header>
}
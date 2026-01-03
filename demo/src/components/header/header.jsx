import HeaderCard from './header-card/header-card'
import styles from './header.module.css'

export default function Header() {
    return <header className={styles.header}>
            <div className={styles['left-side']}>
            <a href="/"><img src="/favicon.svg" /></a>
            <HeaderCard
                link={"/#works1"}
                text={"Featured"}
            />
            <HeaderCard
                link={"/#works2"}
                text={"Works"}
            />
            <HeaderCard
                link={"/about-me"}
                text={"About me"}
            />
            <HeaderCard
            style={` ${styles.header} ${styles[".left-side"]} ${styles["left-end"]} `}
                url={""}
                text={"Contact me"}
                textColor={"white"}
                bgColor={"black"} />
        </div>
    </header>
}
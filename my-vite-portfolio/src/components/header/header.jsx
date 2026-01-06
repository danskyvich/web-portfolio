import styles from './header.module.css'
import HeaderCard from '../header-card/header-card.jsx'

export default function Header() {
    return (
        <header className={styles['header-container']}>
            <img src="favicon.svg" alt="web-logo"></img>
            <HeaderCard
                title={"Projects"}
                url={"/#featured-projects"}
                textColor={"black"}
                bgColor={"white"}
            />
            <HeaderCard
                title={"Works"}
                url={"#other-works"}
                textColor={"black"}
                bgColor={"white"}
            />
            
            <HeaderCard
                title={"Contact Me"}
                url={""}
                textColor={"white"}
                bgColor={"black"}
                width={"9em"}
                align={"flex-end"}
                />
        </header>
    )
}
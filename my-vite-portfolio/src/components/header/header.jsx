'use client'

import styles from './header.module.css'
import HeaderCard from '../header-card/header-card.jsx'

const Header = () => {
    return (
        <>
            <header className={styles['header-container']}
            >
            <img src="favicon.svg" alt="web-logo"></img>
            <HeaderCard
                url={"#featured-projects"}
                title={"Projects"}
                lineColor={'#ed0d8cff'}
                textColor={'#ef97efff'}
            />
            <HeaderCard
                url={"#other-works"}
                title={"Works"}
                lineColor={'#ed0d8cff'}
                textColor={'#ef97efff'}
            />
            <HeaderCard
                url={"#tech-stack"}
                title={"Tech stack"}
                lineColor={'#ed0d8cff'}
                textColor={'#ef97efff'}
            />
            <HeaderCard
                url={"#contact"}
                title={"Contact me"}
                lineColor={'#ed0d8cff'}
                textColor={'#ef97efff'}
            />
        </header>
        </>
    )
}

export default Header;
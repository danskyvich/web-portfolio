'use client'

import styles from './header.module.css'
import HeaderCard from '../header-card/header-card.jsx'

export default function Header() {
    return (
        <>
            <header className={styles['header-container']}>
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
                url={"#misc-works"}
                title={"Others"}
                lineColor={'#ed0d8cff'}
                textColor={'#ef97efff'}
            />
            <HeaderCard
                url={"#contact"}
                title={"Tech stack"}
                lineColor={'#ed0d8cff'}
                textColor={'#ef97efff'}
            />
            <HeaderCard
                url={"#contact"}
                title={"Contact"}
                lineColor={'#ed0d8cff'}
                textColor={'#ef97efff'}
            />
        </header>
        </>
    )
}
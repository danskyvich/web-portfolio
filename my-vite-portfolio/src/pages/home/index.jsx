import styles from "./index.module.css"
import Header from "../../components/header/header.jsx"
import Footer from "../../components/footer/footer.jsx"
import SelfPicCard from "../../components/self-pic-card/self-pic-card.jsx"
import ItemCard from "../../components/vertical-card/item-card.jsx"
import HorizontalCard from "../../components/horizontal-item/horizontal-item.jsx"

export default function Home() {
    return <div className={styles['page-container']}>
        <Header/>
        <div className={styles['content-container']}>
            <SelfPicCard/>
        </div>
        <section className={` ${styles.section} ${styles['featured-works']} `}>
            <h1 id={styles['featured-projects']}>Featured Projects</h1> 
            <div className={styles['card-grid']}>
                <ItemCard
                    title={"Hexadecimal to Color converter"}
                    content={"Converts hex to its color value equivalent"}
                    img={"card-covers/hex-color.png"}
                    url={"https://danskyvich.github.io/hexadecimal-to-color-converter/"}
                    bgColor={"#3471a3ff"}
                    textColor={"white"}
                />
                <ItemCard
                    title={"TOKUEN Web Application"}
                    content={"A web application implementing MERN stack for the TOKUEN application under a startup company."}
                    img={"card-covers/tokuen-web.png"}
                    url={"https://github.com/danskyvich/tokn-web"}
                    bgColor={"#c33232ff"}
                    textColor={"white"}
                />
            </div>
        </section>
        <section className={` ${styles.section} ${styles['other-works']} `}>
            <h1 id={styles['other-works']}>Other Works</h1> 
            <p className={styles.subtitle}>Here lies the entirety of all my works (from both academic and personal purposes) </p>
            <div className={styles['card-grid']}>
                {/* Use this to add a card and modify any information using available attributes.
                    Attributes include: title, content, img, url, alt, & borderAttributes */}
                <ItemCard
                    title={"Hexadecimal to Color converter"}
                    content={"Converts hexadecimal input into its color equivalent, displaying its rgb and decimal details simultaneously."}
                    img={"card-covers/work-1-bg.png"}
                    borderAttributes={"3px solid black"}
                    alt={"hex-color website screenshot"}
                />
                <ItemCard
                    title={"Hexadecimal to Color converter"}
                    content={"Converts hexadecimal input into its color equivalent, displaying its rgb and decimal details simultaneously."}
                    img={"card-covers/work-1-bg.png"}
                    borderAttributes={"3px solid black"}
                />
                <ItemCard
                    title={"Hexadecimal to Color converter"}
                    content={"Converts hexadecimal input into its color equivalent, displaying its rgb and decimal details simultaneously."}
                    img={"card-covers/work-1-bg.png"}
                    borderAttributes={"3px solid black"}
                />
                <ItemCard
                    title={"Hexadecimal to Color converter"}
                    content={"Converts hexadecimal input into its color equivalent, displaying its rgb and decimal details simultaneously."}
                    img={"card-covers/work-1-bg.png"}
                    borderAttributes={"3px solid black"}
                />
                
            </div>
        </section>
        <section className={` ${styles.section} ${styles['misc-works']} `}>
            <h1 id={styles['misc-works']}>Miscellaneous Works</h1> 
            <p className={styles.subtitle}>My personal works or projects that spans genres and tackles different fields.</p>
            <div className={styles['vertical-grid']}>
                {/* Use this to add a card and modify any information using available attributes.
                    Attributes include: title, content, url, bgColor, and borderAttributes*/}
                <HorizontalCard
                    title={"Creative Writing -- Worldbuilding of Chatten and Leucen"}
                    content={"A wiki-style, worldbuilding project revolving around a fictional kingdom inspired by the UK."}
                    url={"https://iiwiki.com/wiki/Chatten and Leucen"}
                    src="card-covers/coa_chatten_and_leucen.png"
                />
                <HorizontalCard
                    title={"Cartography -- 1903 proposed improvements of Daniel Burnham for the City of Manila"}
                    content={"A personal take on an alternate timeline where Manila's development revolves around the aforementioned 1903 Plan of Manila."}
                    src="card-covers/manila-seal.svg"
                />
            </div>
        </section>
        <Footer/>
    </div>
}
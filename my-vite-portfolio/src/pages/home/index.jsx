import styles from "./index.module.css"
import Header from "../../components/header/header.jsx"
import Footer from "../../components/footer/footer.jsx"

export default function Home() {
    return <div className={styles['page-container']}>
        <Header/>
        <div className={styles['content-container']}>

        </div>
        <Footer/>
    </div>
}
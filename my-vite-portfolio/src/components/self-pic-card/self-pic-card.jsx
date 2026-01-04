import styles from "./self-pic-card.module.css"
import ImportantButton from "../important-button/important.jsx"

export default function SelfPicCard() {
    return <div className={styles['self-pic-container']}>
        <img className={styles.pic} src="actual_pic.jpg" alt="selfie"/>
        <p>Hi! I'm Danilo. Here you can see my projects and works that describes who I am 💜.</p>

        <div className={styles['resume-container']}>
            <ImportantButton
                title={"📃View my Resume"}
                url={""}
            />
        </div>
    </div>
}
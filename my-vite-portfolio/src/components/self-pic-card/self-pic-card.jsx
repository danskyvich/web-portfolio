import styles from "./self-pic-card.module.css"
import ImportantButton from "../important-button/important.jsx"
import { motion } from 'motion/react'

export default function SelfPicCard() {
    return <div className={styles['self-pic-container']}>
        <motion.img className={styles.pic} src="actual_pic.jpg" alt="selfie"
            whileHover={{ transition: { duration: 0.1}}}
        />
        <p>Hi! I'm <span id={styles.name}>Danilo Pelin</span>. Here you can see my projects and works that describes who I am 💜.</p>

        <div className={styles['resume-container']}>
            <ImportantButton
                title={"View my Resume"}
                url={"/resume"}
            />
        </div>
    </div>
}
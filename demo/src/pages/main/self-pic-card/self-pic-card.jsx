import styles from './self-pic-card.module.css';

export default function SelfPicCard() {
    return <div className={styles['self-pic-container']}>
        <img src="images/actual_pic.jpg" alt="self-picture" />
        <p>Hi! I'm Danilo Pelin, a front-end developer, and welcome to my portfolio! Here, you can see all my projects and works that define my interests 💙.</p>
    </div>
}
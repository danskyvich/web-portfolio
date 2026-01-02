import styles from "./horizontal-card.module.css"

const HorizontalCard = ({link, itemName, itemDesc}) => {
    return <a href={link} target="_blank" link="noopener noreferrer" className={styles['horizontal-container']}>
        <h2 className={styles.itemTitle}>{itemName}</h2>
        <p className={styles.itemDesc}><i>{itemDesc}</i></p>
    </a>
}

export default HorizontalCard;
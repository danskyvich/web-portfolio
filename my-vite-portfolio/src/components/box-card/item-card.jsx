import styles from './item-card.module.css'

const ItemCard = ({title, content, bgColor, textColor, img, url, borderAttributes, alt}) => {
    return (
        <a className={styles['item-card-container']} href={url} target="_blank" rel="noopener noreferrer" 
        style={{backgroundColor: bgColor, color: textColor, border: borderAttributes}}
        >
            <img src={img} alt={alt}/>
            <div className={styles.text}>
                <p id={styles['item-title']}><b>{title}</b></p>
                <p id={styles['item-content']}><b>{content}</b></p>
            </div>
        </a>
    )
}

export default ItemCard;
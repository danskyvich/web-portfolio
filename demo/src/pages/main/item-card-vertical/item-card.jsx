import styles from './item-card.module.css'

const ItemCard = ({bgColor, textColor, img, itemName, itemDesc, alt, url}) => {
    return <a href={url} className={styles['item-container']} style={{backgroundColor: bgColor, color: textColor}}>
        <img src={img} alt={alt}/>
        <h1>{itemName}</h1>
        <p>{itemDesc}</p>
    </a>
}
export default ItemCard;
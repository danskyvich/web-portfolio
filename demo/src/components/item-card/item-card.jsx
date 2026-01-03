import styles from './item-card.module.css'

const ItemCard = ({headingColor, contentColor, bgColor, textStyle, img, itemName, itemDesc, alt, url, width, height, borderAttributes, textAlign, shadowAttributes}) => {
    return <a href={url} target="_blank" rel="noopener noreferrer" className={styles['item-container']} style={{backgroundColor: bgColor, width: width, height: height, border: borderAttributes, textAlign: textAlign, boxShadow: shadowAttributes}}>
        <img src={img} alt={alt}/>
        <h2 style={{color: headingColor, padding: "10px 10px 5px 10px"}}className="item-card-verti-heading"><b>{itemName}</b></h2>
        <p style={{color: contentColor, padding: "5px 10px 20px 10px"}} className="item-card-verti-p"><b><span style={{fontStyle: textStyle}}>{itemDesc}</span></b></p>
       
    </a>
}
export default ItemCard;
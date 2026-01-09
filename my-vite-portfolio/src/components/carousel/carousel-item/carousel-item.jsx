import styles from './carousel-item.module.css'

const CarouselItem = ({img, alt, title}) => {
    return <li className={styles['carousel-item-container']}
    >
        <img className={styles['carousel-item-image']} src={img} alt={alt}/>
        <h2 id={styles['carousel-item-title']}>{title}</h2>
    </li>
}

export default CarouselItem;
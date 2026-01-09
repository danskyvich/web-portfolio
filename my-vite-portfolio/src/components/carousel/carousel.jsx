import styles from './carousel.module.css'
import CarouselItem from './carousel-item/carousel-item.jsx'

const Carousel = () => {

    
    return <div className={styles['carousel-container']}>
        <CarouselItem
            img={'card-covers/tokuen-web.png'}
            alt={'tokuen-cover'}
        />
        <CarouselItem
            img={'card-covers/tokuen-web.png'}
            alt={'tokuen-cover'}
        />
        <div className={styles['caption-container']}>

        </div>
    </div>
}

export default Carousel;
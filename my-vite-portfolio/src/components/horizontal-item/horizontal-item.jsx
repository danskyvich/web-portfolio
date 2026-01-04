import styles from './horizontal-item.module.css'

const HorizontalCard = ({title, content, url, borderAttributes}) => {
    return <div className={styles['horizontal-container']}>
        <a className={styles['horizontal-card']} href={url} target="_blank" rel="noopener noreferrer">
            <p id={styles.title}><b>{title}</b></p> 
            <p id={styles.content}><i>{content}</i></p>
        </a>
    </div>
}

export default HorizontalCard;
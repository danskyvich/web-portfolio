import styles from './header-card.module.css'

const HeaderCard = ({url, title, bgColor, textColor, width, height}) => {
    return <a className={styles['header-card-container']} href={url} style={{backgroundColor: bgColor, color: textColor, width: width, height: height}}><b>{title}</b></a>
}

export default HeaderCard;
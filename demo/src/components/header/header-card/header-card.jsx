import styles from './header-card.module.css';

const HeaderCard = ({ url, text, textColor, bgColor }) => {
    return <a href={url} className={styles.header} style={{ backgroundColor: bgColor }}><p style={{ color: textColor }}>{text}</p></a>
};

export default HeaderCard;
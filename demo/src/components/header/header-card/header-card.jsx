import styles from './header-card.module.css';

const HeaderCard = ({ link, text, textColor, bgColor, align}) => {
    return <a className={styles['header-card-design']} href={link} style={{ backgroundColor: bgColor, color: textColor, textAlign: align}}>{text}</a>
    };

export default HeaderCard;
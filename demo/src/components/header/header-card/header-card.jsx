import styles from './header-card.module.css';

const HeaderCard = ({ link, text, textColor, bgColor, align, width}) => {
    return <a className={styles['header-card-design']} href={link} style={{ backgroundColor: bgColor, color: textColor, textAlign: align, width: width}}>{text}</a>
    };

export default HeaderCard;
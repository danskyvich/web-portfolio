import styles from './header-card.module.css';

const HeaderCard = ({ link, text, textColor, bgColor }) => {
    return <a className={styles['header-card-design']} href={link} style={{ backgroundColor: bgColor, color: textColor}}>{text}</a>
    };

export default HeaderCard;
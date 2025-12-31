import styles from "./social-link-item.module.css"

const SocialLinkItem = ({ url, link, alt }) => {
    return <a className={styles['social-link']} href={url} target="_blank" rel="noopener noreferrer"><img src={link} alt={alt} /></a>
}

export default SocialLinkItem;
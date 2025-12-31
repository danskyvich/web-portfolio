import SocialLinkItem from "./social-link-item/social-link-item"
import styles from "./social-links.module.css"

export default function SocialLinks() {
    return <div className={styles['social-links-row']}>
        <SocialLinkItem
            url={"https://www.linkedin.com/in/danilo-pelin-220313322/"}
            link={"./images/logos/linkedin.png"}
            alt={"linkedin-icon"}
        />
        <SocialLinkItem
            url={"https://web.facebook.com/danilo.pelin/"}
            link={"./images/logos/flogo.png"}
            alt={"facebook-icon"}
        />
        <SocialLinkItem
            url={"https://github.com/danskyvich"}
            link={"./images/logos/github.png"}
            alt={"github-icon"}
        />
    </div>
}
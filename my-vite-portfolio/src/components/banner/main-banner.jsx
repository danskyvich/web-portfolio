import styles from "./main-banner.module.css"

export default function Banner() {

    return <div className={styles['self-pic-container']}>
       <p id={styles['normal-text']}>I'm a <span className={styles.important}>Front-end Developer</span><span id={styles['lower-text']}> whose aim is to create products that uplift individuals and help the community. <i>From the people, for the people.</i></span></p>
       <hr/>
    </div>
}
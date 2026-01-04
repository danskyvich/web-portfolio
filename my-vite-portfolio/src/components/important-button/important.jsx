import styles from './important.module.css'

const ImportantButton = ({url, title}) => {
    return <a className={styles['important-button']} href={url}><b>{title}</b></a>
}

export default ImportantButton;
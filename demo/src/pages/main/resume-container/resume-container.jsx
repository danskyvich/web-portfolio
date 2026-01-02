import styles from './resume-container.module.css'

const ResumeContainer = () => {
    return <div className={styles['resume-container']}>
        <a id={styles['resume-button']} href="">View my resume!</a>
    </div>
}

export default ResumeContainer;
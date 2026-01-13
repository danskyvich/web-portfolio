import styles from './project-item.module.css'
import { motion } from 'motion/react'
import FadeInCard from '../../assets/animations/fade-in-card.jsx'

const ProjectItem = ({img, alt, githubUrl, liveUrl, textAlignment, marginAttributes, title, description, timeSpan, techUsed}) => {
    return <div className={styles['project-item-row']}>
            <div className={` ${styles['project-item-image']} ${styles.side}`} style={{margin: marginAttributes}}>
                
                {/**image */}
                <img className={styles['item-image']} src={img} alt={alt}/>

                {/** buttons on the bottom */}
                <div className={styles['item-footer-container']}>
                    <div className={styles['item-links-container']}>
                        <motion.a href={liveUrl} target='_blank' rel='noopener noreferrer' style={{ textAlign: textAlignment}} className={` ${styles['item-button']}`}
                            variants={FadeInCard}
                            initial='initial'
                            whileInView='whileInView'
                            transition='transition'
                            viewport='viewport'
                        >View live</motion.a>
                        <motion.a href={githubUrl} target='_blank' rel='noopener noreferrer' style={{ textAlign: textAlignment}} className={`${styles['item-button']}`}
                            variants={FadeInCard}
                            initial='initial'
                            whileInView='whileInView'
                            transition={{ delay: 0.1, transform: {duration: 0.5} }}
                            viewport='viewport'
                        >View on <i className='fa-brands fa-github'/></motion.a>
                    </div>

                </div>
            </div>

            {/** Item title, timespan, and description in right-hand side */}
            <div className={styles['project-item-text']}>
                <motion.p className={styles['item-title']}
                    variants={ FadeInCard }
                    initial='initial'
                    whileInView='whileInView'
                    transition='transition'
                    viewport='viewport'
                >{title}</motion.p>
                <motion.p className={styles['item-timespan']}
                    variants={ FadeInCard }
                    initial='initial'
                    whileInView='whileInView'
                    transition='transition'
                    viewport='viewport'
                ><i class='fa-solid fa-clock'/> {timeSpan}</motion.p>
                <motion.p className={styles['item-description']}
                    variants={FadeInCard}
                    initial='initial'
                    whileInView='whileInView'
                    transition={{ delay: 0.1, transform: {duration: 0.5} }}
                    viewport='viewport'
                >{description}</motion.p>
                <motion.hr className={styles['text-border']}
                    variants={ FadeInCard }
                    initial={{ y: 75, opacity: 0}}
                    whileInView={{ y: 0, opacity: 0.15, }}
                    transition={{ delay: 0.2, transform: {duration: 0.25}}}
                    viewport='viewport'
                />
                <motion.p className={styles['item-tech-used']} style={{ color: '#ef97efff', fontWeight: '1000', fontSize: '1.3rem'}}
                    variants={ FadeInCard }
                    initial='initial'
                    whileInView='whileInView'
                    transition={{ delay: 0.3, transform: {duration: 0.25}}}
                    viewport='viewport'
                
                >{techUsed.join(' | ')}</motion.p>
            </div>
        </div>
}

export default ProjectItem;
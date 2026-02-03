import styles from './contact-me.module.css'
import SocialLinkRow from './social-link-row/social-link-row'
import { motion, easeOut } from 'motion/react'
import LeftToRight from '../../assets/animations/left-to-right.jsx'
import RightToLeft from '../../assets/animations/right-to-left.jsx'

export default function ContactMe() {
    return <div className={styles['contact-me-container']}>
        <div className={styles['contact-me-main']}>
            <div className={styles['contact-me-text']}>
                <motion.p className={styles['header-text']}
                    variants={ LeftToRight }
                    initial='initial'
                    whileInView='whileInView'
                    transition={{ duration: 0.75, ease: easeOut }}
                >NEED SOME HELP?</motion.p>

                <motion.p className={styles['normal-text']}
                    variants={ RightToLeft }
                    initial='initial'
                    whileInView='whileInView'
                    transition={{ duration: 0.75, ease: easeOut }}
                >
                    Let's talk how we make it happen.</motion.p>
                <motion.p className={`${styles['right-aligned-text']} ${styles['right-aligned-desc']}`}
                    variants={ RightToLeft }
                    initial='initial'
                    whileInView='whileInView'
                    transition={{ duration: 0.75, ease: easeOut }}
                >
                    I always love it when I create things that benefit others. All my socials are listed below, you can send me a message anytime!</motion.p>
            </div>
        </div>
        <div className={styles['social-links']} >
                    <SocialLinkRow 
                        title={'GITHUB'} 
                        url={'https://github.com/danskyvich'}
                        />
                    <SocialLinkRow 
                        title={'LINKEDIN'}
                        url={'https://www.linkedin.com/in/danilo-pelin-220313322/'}
                        />
                    <SocialLinkRow 
                        title={'FACEBOOK'}
                        url={'https://web.facebook.com/danilo.pelin'}
                        />
                    <SocialLinkRow 
                        title={'INSTAGRAM'}
                        url={'https://instagram.com/danppelin'}
                        />
                    <SocialLinkRow 
                        title={'RESUME'}
                        url={'https://drive.google.com/file/d/1LCOaUFPNnHgzXRAuOhzf6nR0lpb1Co-w/view?usp=sharing'}
                        />
                    <SocialLinkRow 
                        title={'EMAIL'}
                        url={'mailto:danilopelinjr@gmail.com'}
                        />
                </div>
    </div>
}
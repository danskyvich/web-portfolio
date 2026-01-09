import styles from './contact-me.module.css'
import SocialLinkRow from './social-link-row/social-link-row'

export default function ContactMe() {
    return <div className={styles['contact-me-container']}>
        <div className={styles['contact-me-main']}>
            <div style={{ display: 'flex', flex: '1', width: '45vw'}}/>
            <div className={styles['contact-me-text']}>
                <p className={styles['header-text']}>NEED SOME HELP?</p>
                <p className={styles['normal-text']}>Let's talk how we make it happen.</p>
                <p className={`${styles['right-aligned-text']} ${styles['right-aligned-desc']}`}>I always love it when I create things that benefit others. All my socials are listed below, you can send me a message anytime!</p>
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
                        url={'#'}
                        />
                    <SocialLinkRow 
                        title={'EMAIL'}
                        url={'mailto:danilocanabanopelinjr@gmail.com'}
                        />
                </div>
            </div>
        </div>
    </div>
}
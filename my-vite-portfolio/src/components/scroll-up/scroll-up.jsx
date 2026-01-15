import { useState, useRef, useEffect } from 'react'
import styles from './scroll-up.module.css'

const ScrollUp = ({scrollPoint}) => {
    const[isVisible, setVisibility] = useState(false)
    const scrollRef = useRef();

    useEffect(() => {const toggleVisibility = () => {
        if (window.pageYOffset > scrollPoint) {
            setVisibility(true)
        } else {
            setVisibility(false)
        }
    };
        window.addEventListener('scroll', toggleVisibility);
      return () => window.removeEventListener('scroll', toggleVisibility);
      }, [scrollPoint]
)

    return <a ref={scrollRef} href='#' className={`${styles.button}`}
        style={{ 
            opacity: isVisible ? 1 : 0,
            transition: 'opacity 0.2s ease-in-out',
            pointerEvents: isVisible ? 'auto' : 'none',
        }}
    >
        <i className='fa-solid fa-arrow-up'/>
    </a>
}

export default ScrollUp;
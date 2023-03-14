import React, {useState, useEffect, useRef} from 'react';
import styles from './styles.module.css';
import images from './images';


/* keep in mind that this component will turn into a mobile menu bar*/

/* TODO: make the filter and the roadmap component re-usable*/
function LogoBox() {
    const [showMobileMenu, setShowMobileMenu] = useState(false)
    const mobileMenuRef = useRef()


    const handleClick = () => {
        setShowMobileMenu(!showMobileMenu);
    }


    useEffect(() => {
        const mobileIcon = document.querySelector('.' + styles.mobileIcon)

        if(showMobileMenu){
            mobileIcon.style.maskImage = `url(${images['closeIcon']}`;
            mobileIcon.style.webkitMaskImage = `url(${images['closeIcon']}`;
        }  
        else{
            mobileIcon.style.maskImage = '';
            mobileIcon.style.webkitMaskImage = '';
        }
    }, [showMobileMenu])

    useEffect(() => {
        if(showMobileMenu){
            mobileMenuRef.current.style.display = 'block'
            setTimeout(() => {
                mobileMenuRef.current.style.opacity = '1';
            }, 100)
        }
        else{
            mobileMenuRef.current.style.opacity = ''; 
            setTimeout(() => {
                mobileMenuRef.current.style.display = '';
            }, 200)
        }

            
    }, [showMobileMenu])

    return(
        <>
            <section className={styles.container}>
                <div className={styles.content}>
                    <h2 className={styles.title}>
                        Frontend Mentor
                    </h2>
                    <p className={styles.desc}>
                        Feedback Board
                    </p>
                </div>
                <div className={styles.mobileIcon} onClick={handleClick}></div>
            </section>     
            <section className={styles.overlay} ref={mobileMenuRef}>
                <div className={styles.mobileMenu}></div>
            </section>   
            
        </>

    )
}

export default LogoBox;
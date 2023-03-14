import React, {useState, useEffect, useRef} from 'react';
import styles from './styles.module.css';
import images from './images';


/* keep in mind that this component will turn into a mobile menu bar*/

/* TODO: make the filter and the roadmap component re-usable*/
function LogoBox() {
    const [showMobileMenu, setShowMobileMenu] = useState(false)
    const overlayRef = useRef()
    const mobileMenuRef = useRef();

    const handleClick = () => {
        setShowMobileMenu(!showMobileMenu);
    }

/* changing the hamburger icon everytime the user clicks on it */
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


/* making the overlay appear everytime the user clicks on the hamburger icon*/
    useEffect(() => {
        if(showMobileMenu){
            overlayRef.current.style.display = 'block'
            setTimeout(() => {
                overlayRef.current.style.opacity = '1';
            }, 1)
        }
        else{
            overlayRef.current.style.opacity = ''; 
            setTimeout(() => {
                overlayRef.current.style.display = '';
            }, 200)
        }
    }, [showMobileMenu])


    useEffect(() => {
        if(showMobileMenu)
            setTimeout(() => {
                mobileMenuRef.current.style.right = '0px';
            }, 200)
        else
            mobileMenuRef.current.style.right = '';

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
            <section className={styles.overlay} ref={overlayRef}>
                <div className={styles.mobileMenu} ref={mobileMenuRef}></div>
            </section>   
            
        </>

    )
}

export default LogoBox;
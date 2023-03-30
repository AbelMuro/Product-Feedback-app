import React, {useState, useEffect, useRef} from 'react';
import {useSelector} from 'react-redux'
import Filter from './../../ReusableComponents/Filter';
import RoadMap from './../../ReusableComponents/RoadMap';
import styles from './styles.module.css';
import images from './images';
import { useMediaQuery } from '@mui/material';


/* keep in mind that this component will turn into a mobile menu bar*/
function LogoBox() {
    const [showMobileMenu, setShowMobileMenu] = useState(false);
    const mobile = useMediaQuery('(max-width: 603px)');
    const filter = useSelector(state => state.filter);
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
            overlayRef.current.style.display = 'block';
            setTimeout(() => {                              //if i dont make the following line of code asynchronous, then the transition animation will be skipped
                overlayRef.current.style.opacity = '1';
            }, 0)
        }
        else{
            overlayRef.current.style.opacity = ''; 
            setTimeout(() => {
                overlayRef.current.style.display = '';      //i will need to wait at least 200 milliseconds for the transition animation to finish
            }, 200)
        }
    }, [showMobileMenu])

    /* moving the mobile menu from offscreen to onscreen with the 'right' css property*/
    useEffect(() => {
        if(showMobileMenu)
            setTimeout(() => {
                mobileMenuRef.current.style.right = '0px';
            }, 200)
        else
            mobileMenuRef.current.style.right = '';

    }, [showMobileMenu])

    /* this will prevent the user from scrolling while the mobile menu is open*/
    useEffect(() => {
        const handleScrolling = () => {
            window.scrollTo(0,0);
        }
        if(showMobileMenu)
            window.addEventListener('scroll', handleScrolling);
        else
            window.removeEventListener('scroll', handleScrolling);

        return () => {
            window.removeEventListener('scroll', handleScrolling);
        }

    }, [showMobileMenu])

    useEffect(() => {
        if(!mobile) 
            setShowMobileMenu(false)
        
    }, [mobile])

    /* this will close the mobile menu when the user changes the category filter*/
    useEffect(() => {
        setShowMobileMenu(false);
    }, [filter])

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
                <div className={styles.mobileMenu} ref={mobileMenuRef}>
                    <Filter/>
                    <RoadMap/>
                </div>
            </section>   
            
        </>

    )
}

export default LogoBox;
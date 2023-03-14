import React, {useState, useCallback, useEffect} from 'react';
import styles from './styles.module.css';
import images from './images';


/* now i will need to create a blank container that will float to the right, this will server as the
 mobile menu, 
*/
function LogoBox() {
    const [showMobileMenu, setShowMobileMenu] = useState(false)

    const handleClick = () => {
        setShowMobileMenu(!showMobileMenu);
    }


    useEffect(() => {
        const mobileIcon = document.querySelector('.' + styles.mobileIcon)
        console.log(mobileIcon.style);

        if(showMobileMenu){
            mobileIcon.style.maskImage = `url(${images['closeIcon']}`;
            mobileIcon.style.webkitMaskImage = `url(${images['closeIcon']}`;
        }  
        else{
            mobileIcon.style.maskImage = '';
            mobileIcon.style.webkitMaskImage = '';
        }
    }, [showMobileMenu])

    return(
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
    )
}

export default LogoBox;
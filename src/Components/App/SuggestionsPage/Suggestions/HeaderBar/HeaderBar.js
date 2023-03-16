import React from 'react';
import useMediaQuery from './../../../ReusableComponents/useMediaQuery';
import {useNavigate} from 'react-router-dom';
import SelectBox from './SelectBox';
import styles from './styles.module.css';
import images from './images';

/* finish styling this component for mobile*/
function HeaderBar() {
    const mobile = useMediaQuery('(max-width: 603px)');
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/feedback');
    }

    return(
        <header className={styles.container}>
            <section className={styles.content}>
                <div className={styles.suggestionsBox}>
                    {mobile ? <></> : <>
                    <img src={images['lightBulb']} className={styles.lightBulb}/>
                    <h3 className={styles.title}>
                        6 Suggestions
                    </h3>
                    </>}                    
                </div>
                <SelectBox/>                   
                <button className={styles.feedbackButton} onClick={handleClick}>
                    + Add Feedback
                </button>
            </section>
        </header>
        )
}

export default HeaderBar;
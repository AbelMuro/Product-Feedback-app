import React from 'react';
import useMediaQuery from './../../../ReusableComponents/useMediaQuery';
import {useNavigate} from 'react-router-dom';
import TotalPosts from './TotalPosts';
import SelectBox from './SelectBox';
import styles from './styles.module.css';
import images from './images';

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
                    <TotalPosts/>
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
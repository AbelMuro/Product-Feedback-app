import React from 'react';
import SelectBox from './SelectBox';
import styles from './styles.module.css';
import images from './images';

function HeaderBar() {
    return(
        <header className={styles.container}>
            <section className={styles.content}>
                <div className={styles.suggestionsBox}>
                    <img src={images['lightBulb']} className={styles.lightBulb}/>
                    <h3 className={styles.title}>
                        6 Suggestions
                    </h3>                    
                </div>
                <SelectBox/>                   
                <button className={styles.feedbackButton}>
                    <img src={images['plusSign']} className={styles.plus}/>
                    &nbsp;Add Feedback
                </button>
            </section>
        </header>
        )
}

export default HeaderBar;
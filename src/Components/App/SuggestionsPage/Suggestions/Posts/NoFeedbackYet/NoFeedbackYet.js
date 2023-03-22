import React from 'react';
import {useNavigate} from 'react-router-dom';
import styles from './styles.module.css';
import images from './images'

function NoFeedbackYet() {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/feedback');
   }

    return(                        
        <section className={styles.noFeedback}>
            <img src={images['guyWithMagnifyingglass']} className={styles.noFeedbackImage}/>
            <h1 className={styles.noFeedbackTitle}>
                There is no feedback yet.
            </h1>
            <p className={styles.noFeedbackDesc}>
                Got a suggestion? Found a bug that needs to be squashed? 
                We love hearing about new ideas to improve our app.
            </p>
            <button className={styles.button} onClick={handleClick}>
                + Add Feedback
            </button>
        </section>
    )
}

export default NoFeedbackYet;
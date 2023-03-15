import React from 'react';
import TitleInput from './TitleInput'
import CategoryInput from './CategoryInput';
import FeedbackInput from './FeedbackInput';
import styles from './styles.module.css';
import images from './images'

function CreateFeedbackPage(){
    return(
            <main className={styles.container}>
                <a className={styles.goBackLink}>
                    <img src={images['leftArrow']} className={styles.arrowLeft}/>Go Back
                </a>
                <form className={styles.form}>
                    <img src={images['plus']} className={styles.plus}/>
                    <h1 className={styles.title}>
                        Create New Feedback
                    </h1>
                    <TitleInput/>
                    <CategoryInput/>
                    <FeedbackInput/>
                </form>
            </main>
        )
}

export default CreateFeedbackPage;
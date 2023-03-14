import React from 'react';
import styles from './styles.module.css';

function CreateFeedbackPage(){
    return(
            <main className={styles.container}>
                <a className={goBackLink}>
                    Go Back
                </a>
            </main>
        )
}

export default CreateFeedbackPage;
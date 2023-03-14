import React from 'react';
import styles from './styles.module.css';

function LogoBox() {
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
        </section>
    )
}

export default LogoBox;
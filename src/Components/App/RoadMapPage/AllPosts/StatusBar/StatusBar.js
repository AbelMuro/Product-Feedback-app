import React from 'react';
import styles from './styles.module.css';

function StatusBar() {
    return(
        <section className={styles.container}>
            <div className={styles.statusTitle}>
                <h4 className={styles.title}>
                    Planned
                </h4>
                <p className={styles.desc}>
                    Ideas prioritized for research
                </p>
            </div>
            <div className={styles.statusTitle}>
                <h4 className={styles.title}>
                    In-Progress
                </h4>
                <p className={styles.desc}>
                    Currently being developed
                </p>
            </div>
            <div className={styles.statusTitle}>
                <h4 className={styles.title}>
                    Live
                </h4>
                <p className={styles.desc}>
                    Released features
                </p>
            </div>                
        </section>
        )
}

export default StatusBar;
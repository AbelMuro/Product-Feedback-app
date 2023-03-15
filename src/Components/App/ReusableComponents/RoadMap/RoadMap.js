import React from 'react';
import styles from './styles.module.css';

function RoadMap() {
    return(
            <section className={styles.container}>
                <h3 className={styles.title}>
                    Roadmap
                </h3>
                <a className={styles.viewLink}>
                    View
                </a>
                <div className={styles.status}>
                    <div className={styles.dotOne}></div>
                    <p className={styles.statusTitle}>
                        Planned
                    </p>
                </div>
                <div className={styles.currentNumber}>
                    0
                </div>
                <div className={styles.status}>
                    <div className={styles.dotTwo}></div>
                    <p className={styles.statusTitle}>
                        In-Progress
                    </p>
                </div>
                <div className={styles.currentNumber}>
                    0
                </div>
                <div className={styles.status}>
                    <div className={styles.dotThree}></div>
                    <p className={styles.statusTitle}>
                        Live
                    </p>
                </div>
                <div className={styles.currentNumber}>
                    0
                </div>
            </section>
        )
}

export default RoadMap;
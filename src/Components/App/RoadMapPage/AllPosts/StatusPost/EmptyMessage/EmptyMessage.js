import React from 'react';
import styles from './styles.module.css';

function EmptyMessage(){
    return(
        <section className={styles.container}>
            <h3 className={styles.message}>
                No posts available
            </h3>
        </section>
    )
}

export default EmptyMessage;
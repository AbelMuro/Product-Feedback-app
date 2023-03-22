import React from 'react';
import StatusBar from './StatusBar';
import styles from './styles.module.css';

function AllPosts() {
    return(
        <section className={styles.container}>
            <StatusBar/>
        </section>
    )
}

export default AllPosts
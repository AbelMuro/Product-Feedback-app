import React from 'react';
import Header from './Header';
import AllPosts from './AllPosts';
import styles from './styles.module.css';

function RoadMapPage() {
    return(
        <main className={styles.container}>
            <Header/>
            <AllPosts/>
        </main>
    )
}

export default RoadMapPage;
import React, {useEffect} from 'react';
import Header from './Header';
import AllPosts from './AllPosts';
import styles from './styles.module.css';

function RoadMapPage() {

    useEffect(() => {
        window.scrollTo(0,0)
    }, [])

    return(
        <main className={styles.container}>
            <Header/>
            <AllPosts/>
        </main>
    )
}

export default RoadMapPage;
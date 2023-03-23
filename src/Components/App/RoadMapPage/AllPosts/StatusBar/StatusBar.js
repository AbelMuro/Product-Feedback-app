import React from 'react';
import {collection} from 'firebase/firestore';
import {useCollectionData} from 'react-firebase-hooks/firestore';
import {db} from './../../../Firebase';
import styles from './styles.module.css';

function StatusBar() {
    const collectionRef = collection(db, 'posts');
    const [allPosts, loading] = useCollectionData(collectionRef);


    const countPostsWithStatus = (status) => {
        let totalNumber = 0;
        allPosts.map((post) => {
            if(post.status == status)  
                totalNumber++;
        })

        return totalNumber;
    }
    

    return(
        <section className={styles.container}>
            <div className={styles.statusTitle}>
                <h4 className={styles.title}>
                    {loading ? '' : `Planned (${countPostsWithStatus('Planned')})`}
                </h4>
                <p className={styles.desc}>
                    Ideas prioritized for research
                </p>
            </div>
            <div className={styles.statusTitle}>
                <h4 className={styles.title}>
                    {loading ? '' : `In-Progress (${countPostsWithStatus('In-Progress')})`}
                </h4>
                <p className={styles.desc}>
                    Currently being developed
                </p>
            </div>
            <div className={styles.statusTitle}>
                <h4 className={styles.title}>
                    {loading ? '' : `Live (${countPostsWithStatus('Live')})`}
                </h4>
                <p className={styles.desc}>
                    Released features
                </p>
            </div>                
        </section>
        )
}

export default StatusBar;
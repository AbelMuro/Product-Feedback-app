import React from 'react';
import {collection} from 'firebase/firestore';
import {useCollectionData} from 'react-firebase-hooks/firestore';
import {db} from './../../../../Firebase';
import styles from './styles.module.css';

function TotalPosts() {
    const collectionRef = collection(db, `posts`);
    const [allPosts, loading, error] = useCollectionData(collectionRef);

    return(
        <h3 className={styles.title}> 
            {loading ? '' : allPosts.length} Suggestions
        </h3>
    )
}

export default TotalPosts;
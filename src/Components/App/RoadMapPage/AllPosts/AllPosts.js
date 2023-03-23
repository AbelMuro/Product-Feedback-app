import React from 'react';
import Post from './Post';
import {collection} from 'firebase/firestore';
import {useCollectionData} from 'react-firebase-hooks/firestore';
import {db} from './../../Firebase';
import StatusBar from './StatusBar';
import styles from './styles.module.css';

function AllPosts() {
    const collectionRef = collection(db, `posts`);
    const [allPosts, loading, error] = useCollectionData(collectionRef);

    return(
        <section className={styles.container}>
            <StatusBar/>
            {loading ? <></> : 
                allPosts.map((post, i) => {
                    return(<Post post={post} key={i}/>)
                })
            }
           
        </section>
    )
}

export default AllPosts
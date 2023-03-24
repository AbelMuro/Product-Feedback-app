import React, {useState, useEffect} from 'react';
import Post from './Post';
import styles from './styles.module.css';
import LoadingPosts from './LoadingPosts';
import EmptyMessage from './EmptyMessage';
import {collection, where, query} from 'firebase/firestore';
import {useCollectionData} from 'react-firebase-hooks/firestore';
import {db} from './../../../Firebase';


function StatusPost({postWithStatus}) {
    const [displayEmptyMessage, setDisplayEmptyMessage] = useState(false);
    const collectionRef = collection(db, `posts`);
    const q = query(collectionRef, where('status', '==', postWithStatus));
    const [allPosts, loading] = useCollectionData(q);


    useEffect(() => {
        if(loading) return;

        if(allPosts.length)
            setDisplayEmptyMessage(false);
        else
            setDisplayEmptyMessage(true);
    }, [loading])


    return(
        <div className={styles.posts}>
            {loading ? <LoadingPosts/> :
                displayEmptyMessage ? <EmptyMessage/> : 
                allPosts.map((post, i) => {
                    return(<Post post={post} key={i}/>)
                })
            }         
        </div>
    )
}

export default StatusPost;
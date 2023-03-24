import React, {useEffect, useState} from 'react';
import LoadingPosts from './LoadingPosts';
import StatusBar from './StatusBar';
import Post from './Post';
import EmptyMessage from './EmptyMessage';
import {useSelector} from 'react-redux';
import {collection, where, query} from 'firebase/firestore';
import {useCollectionData} from 'react-firebase-hooks/firestore';
import {db} from './../../Firebase';
import useMediaQuery from './../../ReusableComponents/useMediaQuery';
import styles from './styles.module.css';

function AllPosts() {
    const [displayEmptyMessage, setDisplayEmptyMessage] = useState(false);
    const mobile = useMediaQuery('(max-width: 607px)');
    const status = useSelector(state => state.status);    
    const collectionRef = collection(db, `posts`);
    const q = query(collectionRef, where('status', '==', status));
    const p = query(collectionRef, where('status', '!=', 'Suggestion'))
    const [allPosts, loading] = useCollectionData(mobile ? q : p);

    useEffect(() => {
        if(loading) return;

        if(allPosts.length)
            setDisplayEmptyMessage(false);
        else 
            setDisplayEmptyMessage(true);

    }, [loading])

    return(
        <section className={styles.container}>
            <StatusBar/>
            {displayEmptyMessage ? <EmptyMessage/>: 
                    <div className={styles.grid}>
                        <div className={styles.posts}>
                            {loading ? <LoadingPosts/> : 
                                allPosts.map((post, i) => {
                                    if(post.status == 'Planned')
                                        return(<Post post={post} key={i}/>)
                                })
                            }                
                        </div>
                        <div className={styles.posts}>
                            {loading ? <LoadingPosts/> : 
                                allPosts.map((post, i) => {
                                    if(post.status == 'In-Progress')
                                        return(<Post post={post} key={i}/>)
                                })
                            }
                        </div>
                        <div className={styles.posts}>
                            {loading ? <LoadingPosts/> : 
                                allPosts.map((post, i) => {
                                    if(post.status == 'Live')
                                        return(<Post post={post} key={i}/>)
                                })
                            }
                        </div>
                    </div>   
            }
        </section>
    )
}

export default AllPosts
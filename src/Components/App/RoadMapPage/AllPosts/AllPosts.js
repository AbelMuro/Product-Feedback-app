import React from 'react';
import Post from './Post';
import {collection} from 'firebase/firestore';
import {useCollectionData} from 'react-firebase-hooks/firestore';
import {db} from './../../Firebase';
import StatusBar from './StatusBar';
import styles from './styles.module.css';

function AllPosts() {
    const collectionRef = collection(db, `posts`);
    const [allPosts, loading] = useCollectionData(collectionRef);

    return(
        <section className={styles.container}>
            <StatusBar/>
            <div className={styles.grid}>
                <div className={styles.plannedPosts}>
                    {loading ? <></> : 
                        allPosts.map((post, i) => {
                            if(post.status == 'Planned')
                                return(<Post post={post} key={i}/>)
                        })
                    }                
                </div>
                <div className={styles.inProgressPosts}>
                    {loading ? <></> : 
                        allPosts.map((post, i) => {
                            if(post.status == 'In-Progress')
                                return(<Post post={post} key={i}/>)
                        })
                    }
                </div>
                <div className={styles.livePosts}>
                    {loading ? <></> : 
                        allPosts.map((post, i) => {
                            if(post.status == 'Live')
                                return(<Post post={post} key={i}/>)
                        })
                    }
                </div>
            </div>





           
        </section>
    )
}

export default AllPosts
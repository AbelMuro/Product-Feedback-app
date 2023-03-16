import React, {useEffect} from 'react';
import Upvotes from './Upvotes';
import styles from './styles.module.css';
import images from './images';
import {collection} from 'firebase/firestore';
import {useCollectionData} from 'react-firebase-hooks/firestore';        


/* i will need to style the no feedback component, then i will make the comment section component later*/
function Posts({db}) {
   const postsCollectionRef = collection(db, 'posts');
   const [posts, loading, error] = useCollectionData(postsCollectionRef);


   useEffect(() => {
        console.log(posts);
   }, [posts])

    return(
        <section className={styles.container}>

            {loading ? <>loading</> : 
                posts.length ? 
                    posts.map((post) => {
                        console.log(posts.length)
                        return(                
                            <div className={styles.post} id={post.id} key={post.id}>
                                <Upvotes upvote={post.upvotes}/>
                                <div className={styles.postInfo}>
                                    <h3 className={styles.title}>
                                        {post.title}
                                    </h3>
                                    <p className={styles.desc}>
                                        {post.feedback}
                                    </p>
                                    <div className={styles.category}>
                                        {post.category}
                                    </div>                                    
                                    <div className={styles.commentContainer}>
                                        <img src={images['commentBubble']} className={styles.commentIcon}/>
                                        {post.comments}
                                    </div>
                                    
                                </div>
                            </div>
                        )
                    }) : 
                    <section className={styles.noFeedback}>

                    </section>

            }                    
           


        </section>
        )
}

export default Posts;
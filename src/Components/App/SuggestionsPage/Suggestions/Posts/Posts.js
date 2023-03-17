import React, {useEffect} from 'react';
import Upvotes from './../../../ReusableComponents/Upvotes';
import styles from './styles.module.css';
import images from './images';
import {collection} from 'firebase/firestore';
import {useCollectionData} from 'react-firebase-hooks/firestore';       
import {useNavigate} from 'react-router-dom'; 


function Posts({db}) {
   const postsCollectionRef = collection(db, 'posts');
   const [posts, loading] = useCollectionData(postsCollectionRef);
   const navigate = useNavigate();

   const handleClick = () => {
        navigate('/feedback');
   }

   const handlePost = (e) => {  
    if(!e.target.matches('#upvotes')){           //the user will navigate to the /:post route as long as they dont click on the upvotes
        const postID = e.target.getAttribute('id');
        navigate('/post', {state: postID});
    }
   }


   useEffect(() => {
   }, [posts])

    return(
        <section className={styles.container}>
            {loading ? <>loading</> : 
                posts.length ? 
                    posts.map((post) => {
                        return(                
                            <div className={styles.post} id={post.id} key={post.id} onClick={handlePost}>
                                <Upvotes upvote={post.upvotes}/>                                         
                                <div className={styles.postInfo} >
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
                        <img src={images['guyWithMagnifyingglass']} className={styles.noFeedbackImage}/>
                        <h1 className={styles.noFeedbackTitle}>
                            There is no feedback yet.
                        </h1>
                        <p className={styles.noFeedbackDesc}>
                            Got a suggestion? Found a bug that needs to be squashed? 
                            We love hearing about new ideas to improve our app.
                        </p>
                        <button className={styles.button} onClick={handleClick}>
                            + Add Feedback
                        </button>
                    </section>
            }                    
        </section>
        )
}

export default Posts;
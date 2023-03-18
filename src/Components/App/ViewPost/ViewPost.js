import React from 'react';
import Upvotes from './../ReusableComponents/Upvotes';
import CommentSection from './CommentSection';
import AddComment from './AddComment';
import {useLocation} from 'react-router-dom';
import {doc} from 'firebase/firestore';
import {useDocumentData} from 'react-firebase-hooks/firestore';     
import styles from './styles.module.css';
import icons from './Icons';
import {db} from './../Firebase';


function ViewPost() {
    const {state} = useLocation();                                      //state is the post-ID of the current post
    const documentRef = doc(db, `posts/${state}`);                                 
    const [post, loading] = useDocumentData(documentRef);

    return(
        <main className={styles.container}>
            <section className={styles.links}>
                <a className={styles.goBackLink}>
                    <img src={icons['leftArrow']}/>Go Back
                </a>
                <button className={styles.editButton}>
                    Edit Feedback
                </button>
            </section>
            {loading ? <>loading</> : 
                <div className={styles.post} id={post.id}>
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
                            <img src={icons['commentIcon']} className={styles.commentIcon}/>
                            {post.comments}
                        </div>        
                    </div>
                </div>
            }
            <CommentSection postID={state}/>
            <AddComment postID={state}/>
        </main>
        )
}

export default ViewPost;
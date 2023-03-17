import React from 'react';
import {doc, collection} from 'firebase/firestore';
import {useCollectionData} from 'react-firebase-hooks/firestore';    
import styles from './styles.module.css';


/* i will need to create another component for the comment replies and i will need to style the elments below*/
function CommentSection({db, postID}) {
    const commentCollectionRef = collection(db, `posts/${postID}/commentSection`);
    const [comments, loading] = useCollectionData(commentCollectionRef);

    return(
        loading ? <>loading</> :
        <section className={styles.container}>
            <div className={styles.totalComments}>
                {comments.length} Comments
            </div>
            {comments.map((comment) => { 
                return(
                    <div className={styles.commentContainer} key={comment.id}>
                        <img src={comment.userImage} className={styles.userImage} alt='user image'/>
                        <div className={styles.userInfo}>
                            <h4 className={styles.title}>
                                Elijah Moss
                            </h4>
                            <p className={styles.userEmail}>
                                @hummingbird1
                            </p>                            
                        </div>
                        <a className={styles.link}>
                            Reply
                        </a>
                        <p className={styles.comment}>
                            {comment.comment}
                        </p>
                    </div>
                )
            })}
        </section>
    )
}

export default CommentSection;
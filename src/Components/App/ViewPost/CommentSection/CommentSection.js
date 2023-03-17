import React, {useState} from 'react';
import {collection} from 'firebase/firestore';
import Comment from './Comment'
import {useCollectionData} from 'react-firebase-hooks/firestore';    
import styles from './styles.module.css';



/* i will need to create another component for the comment replies and i will need to style the elments below*/
function CommentSection({db, postID}) {
    const commentCollectionRef = collection(db, `posts/${postID}/commentSection`);
    const [comments, loading] = useCollectionData(commentCollectionRef);


    return(
        loading ? <>loading</> :
        <section className={styles.container}>
            <h4 className={styles.totalComments}>
                {comments.length} Comments
            </h4>
            {comments.map((comment) => { 
                return(
                    <Comment 
                        key={comment.id}
                        id={comment.id} 
                        userName={comment.userName} 
                        userImage={comment.userImage}
                        db={db}
                    />
                )
            })}
        </section>
    )
}

export default CommentSection;
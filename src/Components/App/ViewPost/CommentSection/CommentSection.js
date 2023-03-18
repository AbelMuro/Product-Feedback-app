import React from 'react';
import {collection} from 'firebase/firestore';
import Comment from './Comment'
import {useCollectionData} from 'react-firebase-hooks/firestore';    
import styles from './styles.module.css';

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
                        postID={postID}
                        commentID={comment.id} 
                        userName={comment.userName} 
                        userEmail={comment.userEmail}
                        userImage={comment.userImage}
                        comment={comment.comment}
                        db={db}
                    />
                )
            })}
        </section>
    )
}

export default CommentSection;
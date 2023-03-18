import React from 'react';
import {collection, query, orderBy} from 'firebase/firestore';
import Comment from './Comment'
import {useCollectionData} from 'react-firebase-hooks/firestore';    
import styles from './styles.module.css';
import {db} from './../../Firebase';

function CommentSection({postID}) {
    const commentCollectionRef = collection(db, `posts/${postID}/commentSection`);
    const q = query(commentCollectionRef, orderBy('datePosted', 'desc'));
    const [comments, loading] = useCollectionData(q);


    return(
        loading ? <>loading</> :
        <section className={styles.container}>
            <h4 className={styles.totalComments}>
                {comments.length} Comments
            </h4>
            {comments.map((comment) => { {/* im making every comment into its own component because they all need to have their own state */}
                return(
                    <Comment                                
                        key={comment.id}        
                        postID={postID}
                        commentID={comment.id} 
                        userName={comment.userName} 
                        userEmail={comment.userEmail}
                        userImage={comment.userImage}
                        comment={comment.comment}
                    />
                )
            })}
        </section>
    )
}

export default CommentSection;
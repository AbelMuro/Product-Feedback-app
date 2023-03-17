import React, {useState} from 'react';
import CommentReply from './CommentReply';
import styles from './styles.module.css';

function Comment({id, userImage, comment}) {
    const [displayCommentReply, setDisplayCommentReply] = useState(false);

    const handleReply = () => {
        setDisplayCommentReply(!displayCommentReply);
    }

    return (
        <div className={styles.commentContainer} key={id}>
            <img src={userImage} className={styles.userImage} alt='user image'/>
            <div className={styles.userInfo}>
                <h4 className={styles.userName}>
                    Elijah Moss
                </h4>
                <p className={styles.userEmail}>
                    @hummingbird1
                </p>                            
            </div>
            <a className={styles.replyLink} onClick={handleReply}>
                Reply
            </a>
            <p className={styles.comment}>
                {comment}
            </p>
            {displayCommentReply ? <CommentReply/> : <></>}
        </div>
    )
}

export default Comment;
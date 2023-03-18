import React, {useState} from 'react';
import VerticalLine from './VerticalLine';
import DisplayReplies from './DisplayReplies';
import CommentReply from './../../../ReusableComponents/CommentReply';
import styles from './styles.module.css';

function Comment({postID, commentID, userName, userEmail, userImage, comment, db}) {
    const [displayCommentReply, setDisplayCommentReply] = useState(false);

    const handleReply = () => {
        setDisplayCommentReply(!displayCommentReply);
    }

    return(
        <div className={styles.commentContainer}>
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
            <VerticalLine db={db} postID={postID} commentID={commentID}/>
            <p className={styles.comment}>
                {comment}
            </p>
            {displayCommentReply ? <CommentReply db={db} postID={postID} commentID={commentID} replyTo={userEmail}/> : <></>}
            <DisplayReplies db={db} postID={postID} commentID={commentID}/>
        </div>
    )
}

export default Comment;
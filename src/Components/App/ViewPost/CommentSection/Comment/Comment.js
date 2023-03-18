import React, {useState} from 'react';
import VerticalLine from './VerticalLine';
import DisplayReplies from './DisplayReplies';
import CommentReply from './../../../ReusableComponents/CommentReply';
import styles from './styles.module.css';

function Comment({postID, commentID, userName, userEmail, userImage, comment}) {
    const [displayCommentReply, setDisplayCommentReply] = useState(false);

    const handleReply = () => {
        setDisplayCommentReply(!displayCommentReply);
    }

    const handleClick = () => {
        setDisplayCommentReply(false);
    }

    return(
        <div className={styles.commentContainer}>
            <img src={userImage} className={styles.userImage} alt='user image' referrerPolicy="no-referrer"/>
            <div className={styles.userInfo}>
                <h4 className={styles.userName}>
                    {userName}
                </h4>
                <p className={styles.userEmail}>
                    @{userEmail.slice(0, userEmail.indexOf('@'))}
                </p>                            
            </div>
            <a className={styles.replyLink} onClick={handleReply}>
                Reply
            </a>
            <VerticalLine postID={postID} commentID={commentID}/>
            <p className={styles.comment}>
                {comment}
            </p>
            {displayCommentReply ? <CommentReply postID={postID} commentID={commentID} replyTo={userEmail} handleClick={handleClick}/> : <></>}
            <DisplayReplies postID={postID} commentID={commentID}/>
        </div>
    )
}

export default Comment;
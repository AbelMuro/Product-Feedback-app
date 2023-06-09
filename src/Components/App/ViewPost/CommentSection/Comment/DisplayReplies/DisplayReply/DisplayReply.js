import React, {useState, memo} from 'react';
import CommentReply from './../../../../../ReusableComponents/CommentReply';
import styles from './styles.module.css';

function DisplayReply({postID, commentID, userName, userImage, userEmail,comment, replyTo}) {
    const [openReply, setOpenReply] = useState(false);

    const handleReply = () => {
        setOpenReply(!openReply);
    }

    const handleClick = () => {
        setOpenReply(false);
    }

    return(
        <section className={styles.container}>
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
            <p className={styles.commentReply}>
                <span className={styles.replyTo}>
                    @{replyTo.slice(0, replyTo.indexOf('@'))}
                </span>
                &nbsp;&nbsp;{comment}
            </p>
            {openReply ? 
                <CommentReply 
                    postID={postID} 
                    commentID={commentID} 
                    replyTo={userEmail} 
                    handleClick={handleClick}
                    /> : <></>}
        </section>
    )
}

export default memo(DisplayReply);
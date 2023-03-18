import React, {useState} from 'react';
import CommentReply from './../../../../../ReusableComponents/CommentReply';
import styles from './styles.module.css';

function DisplayReply({db, postID, commentID, userName, userImage, userEmail,comment, replyTo}) {
    const [openReply, setOpenReply] = useState(false);

    const handleReply = () => {
        setOpenReply(!openReply);
    }
    return(
        <section className={styles.container}>
            <img src={userImage} className={styles.userImage} alt='user image'/>
            <div className={styles.userInfo}>
                <h4 className={styles.userName}>
                    Anne valentine
                </h4>
                <p className={styles.userEmail}>
                    @annev1990
                </p>                        
            </div>
            <a className={styles.replyLink} onClick={handleReply}>
                Reply
            </a>
            <p className={styles.commentReply}>
                <span className={styles.replyTo}>@hummingbird1</span>
                &nbsp;&nbsp;{comment}
            </p>
            {openReply ? <CommentReply db={db} postID={postID} commentID={commentID} replyTo={userEmail}/> : <></>}
        </section>
    )
}

export default DisplayReply;
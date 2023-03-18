import React from 'react';
import {collection} from 'firebase/firestore';
import styles from './styles.module.css';
import {useCollectionData} from 'react-firebase-hooks/firestore';   
import {db} from './../../../../Firebase';

/* the vertical line will only appear when the comment itself has replies*/
function VerticalLine({postID, commentID}) {
    const collectionRef = collection(db, `posts/${postID}/commentSection/${commentID}/commentReplies`)
    const [replies, loading] = useCollectionData(collectionRef);


    return( 
        loading ? <></> :          
            replies.length ? 
                <div className={styles.verticalLine}></div> 
                    : 
                <></>
        )
}

export default VerticalLine;
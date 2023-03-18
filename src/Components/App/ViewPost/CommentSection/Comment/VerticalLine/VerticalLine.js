import React, {useEffect} from 'react';
import {collection} from 'firebase/firestore';
import styles from './styles.module.css';
import {useCollectionData} from 'react-firebase-hooks/firestore';   

function VerticalLine({db, postID, commentID}) {
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
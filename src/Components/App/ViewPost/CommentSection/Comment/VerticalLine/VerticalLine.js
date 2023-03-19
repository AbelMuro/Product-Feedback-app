import React from 'react';
import {collection} from 'firebase/firestore';
import styles from './styles.module.css';
import useMediaQuery from  './../../../../ReusableComponents/useMediaQuery';
import {useCollectionData} from 'react-firebase-hooks/firestore';   
import {db} from './../../../../Firebase';

/* the vertical line will only appear when the comment itself has replies*/
function VerticalLine({postID, commentID}) {
    const collectionRef = collection(db, `posts/${postID}/commentSection/${commentID}/commentReplies`)
    const [replies, loading] = useCollectionData(collectionRef);
    const mobile = useMediaQuery('(max-width: 603px)')


    return( 
        loading ? <></> :          
            replies.length ? 
                <div className={styles.verticalLine} ref={(ref) => {
                    if(!ref) return;
                    ref.style.gridRow = mobile ? `3/${replies.length + 3}` : `2/${replies.length + 3}`;
                }}>

                </div> 
                    : 
                <></>
        )
}

export default VerticalLine;
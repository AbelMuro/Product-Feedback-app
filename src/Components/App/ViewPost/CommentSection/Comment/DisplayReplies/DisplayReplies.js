import React, {useState} from 'react';
import DisplayReply from './DisplayReply';
import { collection } from 'firebase/firestore';
import {useCollectionData} from 'react-firebase-hooks/firestore';
import styles from './styles.module.css';

function DisplayReplies({db, postID, commentID}) {
    const [openReply, setOpenReply] = useState(false);
    const collectionRef = collection(db, `posts/${postID}/commentSection/${commentID}/commentReplies`);
    const [replies, loading, error] = useCollectionData(collectionRef);


    return(
        loading ? <></> :
            replies.map((reply) => {
                return(
                    <DisplayReply db={db} {...reply}/>
                    
                )
            })

    )
}

export default DisplayReplies;
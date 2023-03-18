import React, {memo} from 'react';
import DisplayReply from './DisplayReply';
import { collection, query, orderBy } from 'firebase/firestore';
import {useCollectionData} from 'react-firebase-hooks/firestore';
import {db} from './../../../../Firebase';

function DisplayReplies({postID, commentID}) {
    const collectionRef = collection(db, `posts/${postID}/commentSection/${commentID}/commentReplies`);
    const q = query(collectionRef, orderBy('datePosted'))
    const [replies, loading, error] = useCollectionData(q);


    return(
        loading ? <></> :
            replies.map((reply) => {
                return(
                    <DisplayReply key={reply.id} postID={postID} commentID={commentID} {...reply}/>      //every reply will have its own component because it needs to have its own state  
                )
            })

    )
}

export default memo(DisplayReplies);
import React, {useState} from 'react';
import DisplayReply from './DisplayReply';
import { collection } from 'firebase/firestore';
import {useCollectionData} from 'react-firebase-hooks/firestore';
import {db} from './../../../../Firebase';

function DisplayReplies({postID, commentID}) {
    const collectionRef = collection(db, `posts/${postID}/commentSection/${commentID}/commentReplies`);
    const [replies, loading, error] = useCollectionData(collectionRef);


    return(
        loading ? <></> :
            replies.map((reply) => {
                return(
                    <DisplayReply key={reply.id} {...reply}/>      //every reply will have its own component because it needs to have its own state  
                )
            })

    )
}

export default DisplayReplies;
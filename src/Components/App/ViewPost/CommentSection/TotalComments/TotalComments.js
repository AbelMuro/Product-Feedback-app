import React from 'react';
import {db} from './../../../Firebase'
import {doc} from 'firebase/firestore';
import styles from './styles.module.css';
import {useDocumentData} from 'react-firebase-hooks/firestore';   

function TotalComments({postID}) {
    const documentRef = doc(db, `posts/${postID}`);
    const [post, loading, error] = useDocumentData(documentRef);

    return(            
        loading ? <></> : 
            <h4 className={styles.totalComments}>
                {post.comments} Comments
            </h4>
    )
}

export default TotalComments;
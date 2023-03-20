import React from 'react';
import TitleInput from '../ReusableComponents/TitleInput';
import UpdateStatus from './UpdateStatus';
import SelectInput from '../ReusableComponents/SelectInput';
import {useLocation} from 'react-router-dom';
import {doc} from 'firebase/firestore';
import {useDocumentData} from 'react-firebase-hooks/firestore';
import styles from './styles.module.css';
import {db} from './../Firebase';

import icons from './Icons';

function EditFeedbackPage(){
    const {state} = useLocation();
    const docRef = doc(db, `posts/${state}`);                   //{state} is the post id, rememeber that every post has their own unique id
    const [post, loading, error] = useDocumentData(docRef);

    return(
        <section className={styles.container}>
            <a className={styles.goBackLink}>
                <img src={icons['arrowLeft']} className={styles.arrowLeft}/>
                Go Back
            </a>
            <div className={styles.content}>
                <img src={icons['editIcon']} className={styles.editIcon}/>
                <h1 className={styles.title}>
                   {loading ? '' : `Editing '${post.title}'`}
                </h1>
                {loading ? <></> : <TitleInput previousTitle={post.title}/>} 
                {loading ? <></> : <SelectInput options={['Feature', 'UI', 'UX', 'Enhancement', 'Bug']} defaultState={post.category}/>}
                {loading ? <></> : <UpdateStatus options={['Suggestion', 'Planned', 'In-Progress', 'Live']}previousStatus={post.status}/>}
            </div>
            
        </section>
    )
}

export default EditFeedbackPage;
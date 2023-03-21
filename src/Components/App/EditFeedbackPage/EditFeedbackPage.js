import React, {useRef} from 'react';
import TitleInput from '../ReusableComponents/TitleInput';
import UpdateStatus from './UpdateStatus';
import SelectInput from '../ReusableComponents/SelectInput';
import FeedbackInput from './../ReusableComponents/FeedbackInput';
import {useLocation, useNavigate} from 'react-router-dom';
import {doc, updateDoc, deleteDoc} from 'firebase/firestore';
import {useDocumentData} from 'react-firebase-hooks/firestore';
import styles from './styles.module.css';
import {db} from './../Firebase';
import icons from './Icons';

function EditFeedbackPage(){
    const {state} = useLocation();
    const navigate = useNavigate();
    const docRef = doc(db, `posts/${state}`);                   //{state} is the post id, rememeber that every post has their own unique id
    const [post, loading] = useDocumentData(docRef);
    const newTitle = useRef();
    const newCategory = useRef();
    const newStatus = useRef();
    const newFeedback = useRef(); 

    const handleGoBack = () => {
        navigate(-1);
    }

    const handleDelete = async () => {
        const answer = confirm('Are you sure you want to delete?');
        if(!answer) return;

        try{
            navigate('/');            
            await deleteDoc(docRef);
            setTimeout(() => {
                alert('Post has been deleted, goodbye forever :(')
            }, 1);
        }
        catch(error){
            console.log(error);
        }

        

        
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            await updateDoc(docRef, {
                title: newTitle.current.state,
                category: newCategory.current.state,
                status: newStatus.current.state,
                feedback: newFeedback.current.state,
            })
            alert('You have updated the post!');
            navigate(-1);
        }
        catch(error){
            console.log(error);
        }
    }

    return(
        <form className={styles.container} onSubmit={handleSubmit}>
            <a className={styles.goBackLink} onClick={handleGoBack}>
                <img src={icons['arrowLeft']} className={styles.arrowLeft}/>
                Go Back
            </a>
            <div className={styles.content}>
                <img src={icons['editIcon']} className={styles.editIcon}/>
                <h1 className={styles.title}>
                   {loading ? '' : `Editing '${post.title}'`}
                </h1>
                {loading ? <></> : <TitleInput previousTitle={post.title} ref={newTitle}/>} 
                {loading ? <></> : <SelectInput options={['Feature', 'UI', 'UX', 'Enhancement', 'Bug']} defaultState={post.category} ref={newCategory}/>}
                {loading ? <></> : <UpdateStatus options={['Suggestion', 'Planned', 'In-Progress', 'Live']} previousStatus={post.status} ref={newStatus}/>}
                {loading ? <></> : <FeedbackInput prevFeedback={post.feedback} ref={newFeedback}/>}
                <div className={styles.buttonsContainer}>
                    <button className={styles.deleteButton} onClick={handleDelete} type='button'>
                        Delete
                    </button>    
                    <div className={styles.buttons}>
                        <button className={styles.cancelButton} onClick={handleGoBack} type='button'>
                            Cancel
                        </button>
                        <input type='submit' className={styles.submitButton} value={'Save Changes'}/>                                   
                    </div>            
                </div>            
            </div>
        </form>
    )
}

export default EditFeedbackPage;
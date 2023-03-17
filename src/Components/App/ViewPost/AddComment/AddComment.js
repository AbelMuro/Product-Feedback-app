import React, {useState, useRef, useEffect} from 'react';
import {doc, setDoc} from 'firebase/firestore';
import {v4 as uuid} from 'uuid';
import styles from './styles.module.css';

function AddComment({db, postID}) {
    const [text, setText] = useState('');
    const textAreaRef = useRef();
    const errorMessageRef = useRef();

    const handleChange = (e) => {
        setText(e.target.value);
    }

    const handleInvalid = (e) => {
        e.target.setCustomValidity(' ');
        textAreaRef.current.style.border = '1px solid #D73737';
        errorMessageRef.current.style.display = 'block'
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            const commentID = uuid().replace('/', '');
            const commentCollectionRef = doc(db, `posts/${postID}/commentSection/${commentID}`);
            await setDoc(commentCollectionRef, {
                userImage: '',
                userName: '',
                userEmail: '',
                comment: text,
                id: commentID,
            })            
        } catch(error){
            console.log('something went wrong', error);
        }

    }   

    useEffect(() => {
        textAreaRef.current.setCustomValidity('');
        textAreaRef.current.style.border = '';
        errorMessageRef.current.style.display = '';
    }, [text])

    return(
        <form className={styles.container} onSubmit={handleSubmit}>
            <h3 className={styles.title}>
                Add Comment
            </h3>
            <textarea 
                className={styles.textArea}
                value={text}
                maxLength={250}
                onChange={handleChange}
                onInvalid={handleInvalid}
                placeholder='Type your comment here'
                ref={textAreaRef}
                required>
            </textarea>
            <div className={styles.errorMessage} ref={errorMessageRef}>
                Can't be empty
            </div>
            <div className={styles.buttonContainer}>
                <div className={styles.charactersLeft}>
                    {250 - text.length} Characters left
                </div>              
                <input type='submit' value='Post Comment' className={styles.button}/>
            </div>
        </form>
        )
}

export default AddComment;
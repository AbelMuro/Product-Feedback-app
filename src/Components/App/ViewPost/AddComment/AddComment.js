import React, {useState, useRef, useEffect} from 'react';
import SignOutButton from './SignOutButton';
import {doc, setDoc, updateDoc, increment} from 'firebase/firestore';
import {v4 as uuid} from 'uuid';
import styles from './styles.module.css';
import {db, auth} from './../../Firebase';
import { GoogleAuthProvider, signInWithPopup} from 'firebase/auth';

function AddComment({postID}) {
    const [text, setText] = useState('');
    const textAreaRef = useRef();
    const errorMessageRef = useRef();

    const handleChange = (e) => {
        setText(e.target.value);
    }

    const handleInvalid = (e) => {
        e.target.setCustomValidity(' ');
        textAreaRef.current.style.border = '1px solid #D73737';
        errorMessageRef.current.style.display = 'block';
    }

    const handleClick = async () => {
        if(auth.currentUser) return;
        const answer = confirm('To post a comment, you must log in with google, would you like to log in?');
        if(!answer) return;
        const provider = new GoogleAuthProvider();
        try{
            await signInWithPopup(auth, provider);       
        }
        catch(error){
            alert('Please enable popups in your browser')
        }
             
    }

    const handleSubmit = async (e) => {
        e.preventDefault();             
        if(!auth.currentUser) return;       
    
        try{
            const currentDate = new Date();
            const commentID = uuid();
            const commentCollectionRef = doc(db, `posts/${postID}/commentSection/${commentID}`);                //remember, that every comment will have a unique id
            await setDoc(commentCollectionRef, {
                userImage: auth.currentUser.photoURL,
                userName: auth.currentUser.displayName,
                userEmail: auth.currentUser.email,
                comment: text,
                id: commentID,
                datePosted: currentDate.getTime()
            })    
            const postDoc = doc(db, `posts/${postID}`)
            await updateDoc(postDoc, 
                {comments: increment(1)}
            )
            window.scrollTo(0,0);
            setText('');
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
            <SignOutButton/>
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
                <input type='submit' value='Post Comment' className={styles.button} onClick={handleClick}/>
            </div>
        </form>
        )
}

export default AddComment;
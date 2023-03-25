import React, {useState, useRef, useEffect} from 'react';
import {v4 as uuid} from 'uuid'
import {doc, setDoc, increment, updateDoc} from 'firebase/firestore';
import styles from './styles.module.css';
import {db, auth} from './../../Firebase';
import { GoogleAuthProvider, reauthenticateWithCredential, signInWithPopup} from 'firebase/auth'


function CommentReply({postID, commentID, replyTo, handleClick}) {
    const [reply, setReply] = useState('');
    const inputRef = useRef();
    const errorMessageRef = useRef();

    const handleInvalid = () => {
        inputRef.current.setCustomValidity(' ');
        inputRef.current.style.border = '1px solid #D73737';
        errorMessageRef.current.style.display = 'block';
    }

    const handleLogIn = async () => {
        if(auth.currentUser) return;
        const answer = confirm('You must be logged in with google to post a reply, would you like to log in?');
        if(!answer) return;
        try{
            const provider = new GoogleAuthProvider();
            await signInWithPopup(auth, provider);            
        }
        catch(error){
            alert('Please enable popups in your browser');
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if(!auth.currentUser) return;

        try{
            const currentDate = new Date();
            const commentReplyID = uuid();
            const docRef = doc(db, `posts/${postID}/commentSection/${commentID}/commentReplies/${commentReplyID}`);
            await setDoc(docRef, {
                id: commentReplyID,
                replyTo: replyTo,
                comment: reply,
                userName : auth.currentUser.displayName,
                userImage: auth.currentUser.photoURL,
                userEmail: auth.currentUser.email,
                datePosted: currentDate.getTime()
            });   
            const postDocRef = doc(db, `posts/${postID}`)
            await updateDoc(postDocRef, 
                {comments: increment(1)}
            )
            handleClick();                                  //this event handler is from the parent component, it will close the form once it has been submitted

        } catch(error){
            console.log("something went wrong", error);
        }
    }

    const handleChange = (e) => {
        setReply(e.target.value);
    }

    useEffect(() => {
        inputRef.current.setCustomValidity('');
        inputRef.current.style.border = '';
        errorMessageRef.current.style.display = '';
    }, [reply])


    return(
        <form className={styles.container} onSubmit={handleSubmit}>
            <textarea 
                maxLength={250}
                type='text'
                value={reply}
                onChange={handleChange}
                onInvalid={handleInvalid}
                placeholder='Type your reply here'
                className={styles.textArea} 
                ref={inputRef}
                required>
            </textarea>
            <div className={styles.errorMessage} ref={errorMessageRef}>
                Can't be empty
            </div>

            <input type='submit' className={styles.submitButton} value='Post Reply' onClick={handleLogIn}/>
        </form>
    )
}

export default CommentReply;
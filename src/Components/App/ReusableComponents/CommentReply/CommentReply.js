import React, {useState, useRef, useEffect} from 'react';
import {v4 as uuid} from 'uuid'
import {doc, setDoc} from 'firebase/firestore';
import styles from './styles.module.css';


function CommentReply({db, postID, commentID, replyTo}) {
    const [reply, setReply] = useState('');
    const inputRef = useRef();
    const errorMessageRef = useRef();

    const handleInvalid = () => {
        inputRef.current.setCustomValidity(' ');
        inputRef.current.style.border = '1px solid #D73737';
        errorMessageRef.current.style.display = 'block';
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            const commentReplyID = uuid();
            const docRef = doc(db, `posts/${postID}/commentSection/${commentID}/commentReplies/${commentReplyID}`);
            await setDoc(docRef, {
                id: commentReplyID,
                replyTo: replyTo,
                comment: reply,
                userName : '',
                userImage: '',
                userEmail: '',
            });     
        alert('reply submitted')                   
        }catch(error){
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

            <input type='submit' className={styles.submitButton} value='Post Reply'/>
        </form>
    )
}

export default CommentReply;
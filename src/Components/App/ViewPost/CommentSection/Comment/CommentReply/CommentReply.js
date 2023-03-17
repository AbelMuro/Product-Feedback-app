import React, {useState, useRef, useEffect} from 'react';
import styles from './styles.module.css';


/* this is where i left off*/
function CommentReply() {
    const [reply, setReply] = useState('');
    const inputRef = useRef();
    const errorMessageRef = useRef();

    const handleInvalid = () => {
        inputRef.current.setCustomValidity(' ');
        inputRef.current.style.border = '1px solid #D73737';
        errorMessageRef.current.style.display = 'block';
    }

    const handleSubmit = () => {
        
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
import React, {useState, useRef, forwardRef, useImperativeHandle, useEffect} from 'react';
import styles from './styles.module.css';

const FeedbackInput = forwardRef(({prevFeedback}, ref) => {
    const [text, setText] = useState(prevFeedback ? prevFeedback : '');
    const errorMessageRef = useRef();
    const textFieldRef = useRef();

    const handleChange = (e) => {
        setText(e.target.value);
    }

    const handleBlur = (e) => {
        const isValid = e.target.checkValidity();
        if(isValid){
            errorMessageRef.current.style.display = '';
            textFieldRef.current.style.border = ''
        }
        else{
            errorMessageRef.current.style.display = 'block';
            textFieldRef.current.style.border = '1px solid #D73737';
        }
    }   

    const handleInvalid = () => {
        textFieldRef.current.setCustomValidity(' ');
        errorMessageRef.current.style.display = 'block';   
        textFieldRef.current.style.border = '1px solid #D73737';
    }

    useImperativeHandle(ref, () => ({
        get state() {
            return text;
        }
    }))

    useEffect(() => {
        textFieldRef.current.setCustomValidity('');
        errorMessageRef.current.style.display = '';
        textFieldRef.current.style.border = '';
    }, [text])

    return(
        <fieldset className={styles.container}>
            <h4 className={styles.title}>
                Feedback Detail
            </h4>
            <p className={styles.desc}>
                Include any specific comments on what should be improved, added, etc.
            </p>
            <textarea 
                maxLength={250}
                className={styles.textarea}
                value={text}
                onChange={handleChange}
                onInvalid={handleInvalid}
                onBlur={handleBlur}
                required
                ref={textFieldRef}>
            </textarea>                    
            <div className={styles.errorMessage} ref={errorMessageRef}>
                Can't be empty
            </div>
        </fieldset>
    )
})

export default FeedbackInput;

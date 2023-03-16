import React, {useState, useRef, forwardRef, useImperativeHandle, useEffect} from 'react';
import styles from './styles.module.css';

const TitleInput = forwardRef((props, ref) => {
    const [text, setText] = useState('');
    const errorMessageRef = useRef();
    const inputRef = useRef();

    const handleChange = (e) => {
        if(text.length <= 25)
            setText(e.target.value)
    }

    const handleBlur = (e) => {
        const isValid = e.target.checkValidity();

        if(isValid){
            errorMessageRef.current.style.display = '';
            inputRef.current.style.border = '';
        }
        else{
            errorMessageRef.current.style.display = 'block';   
            inputRef.current.style.border = '1px solid #D73737';
        }
    }

    const handleInvalid = () => {
        inputRef.current.setCustomValidity(' ');
        errorMessageRef.current.style.display = 'block';   
        inputRef.current.style.border = '1px solid #D73737';
    }

    useImperativeHandle(ref, () => ({
        get state(){
            return text;
        }
    }))

    useEffect(() => {
        inputRef.current.setCustomValidity('');
        errorMessageRef.current.style.display = '';
        inputRef.current.style.border = '';
    }, [text])

    return(
        <fieldset className={styles.container}>
            <h4 className={styles.title}>
                Feedback Title
            </h4>
            <p className={styles.desc}>
                Add a short, descriptive headline
            </p>
            <input 
                type='text'
                value={text} 
                onChange={handleChange} 
                onInvalid={handleInvalid}
                onBlur={handleBlur}
                className={styles.input} 
                ref={inputRef}
                required/>
            <div className={styles.errorMessage} ref={errorMessageRef}>
                Can't be empty
            </div>
        </fieldset>
    )
})

export default TitleInput;
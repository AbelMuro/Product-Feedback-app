import React, {useState, useRef} from 'react';
import styles from './styles.module.css';

function TitleInput() {
    const [text, setText] = useState('');
    const errorMessageRef = useRef();
    const inputRef = useRef();

    const handleChange = (e) => {
        if(text.length <= 25)
            setText(e.target.value)
    }

    const handleFocus = () => {
        errorMessageRef.current.style.display = '';
        inputRef.current.style.border = '';
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
                onFocus={handleFocus}
                onBlur={handleBlur}
                className={styles.input} 
                ref={inputRef}
                required/>
            <div className={styles.errorMessage} ref={errorMessageRef}>
                Can't be empty
            </div>
        </fieldset>
    )
}

export default TitleInput;
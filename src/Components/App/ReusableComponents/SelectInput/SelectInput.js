import React, {useState, useRef, useEffect, forwardRef, useImperativeHandle} from 'react'
import images from './images';
import styles from './styles.module.css';

const SelectInput = forwardRef(({options, defaultState}, ref) => {
    const [optionChoosen, setoptionChoosen] = useState(defaultState);
    const [openPopup, setOpenPopup] = useState(false);
    const popupRef = useRef();
    const arrowRef = useRef();

    const handlePopup = () => {
        setOpenPopup(!openPopup);
    }   

    const handleOption = (e) => {
        const choosenoptionChoosen = e.target.getAttribute('data-option');
        setoptionChoosen(choosenoptionChoosen);
    }

    useImperativeHandle(ref, () => ({
        get state() {
            return optionChoosen;
        }
    }))

    /* displaying the popup and rotating the arrow in the 'input' box*/
    useEffect(() => {
        if(openPopup){
            popupRef.current.style.display = 'block';
            arrowRef.current.style.transform = 'rotate(180deg)';
        }
        else{
            popupRef.current.style.display = '';
            arrowRef.current.style.transform = '';
        }
    }, [openPopup])


    /* adding a checkmark next to the option that the user has choosen*/
    useEffect(() => {
        const allOptions = document.querySelectorAll('.' + styles.option);

        allOptions.forEach((option) => {                                        //removing all checkmarks
            const checkMark = option.childNodes[1].src;
            if(checkMark)
                option.childNodes[1].src = ''
        }, [optionChoosen])

        allOptions.forEach((option) => {                                        //adding a checkmark next to the option that the user has choosen
            if(option.getAttribute('data-option') == optionChoosen)
                option.childNodes[1].src = images['checkMark'];
        })
    }, [optionChoosen])

    return(
        <fieldset className={styles.container}>
            <h4 className={styles.title}>
                Category
            </h4>
            <p className={styles.desc}>
                Choose a category for your feedback
            </p>
            <div className={styles.selectBox} onClick={handlePopup}>
                {optionChoosen} <img src={images['arrowDown']} className={styles.arrow} alt='arrow down' ref={arrowRef}/>
                <div className={styles.popup} ref={popupRef}>
                    {options.map((option) => {
                        return(
                            <p className={styles.option} onClick={handleOption} data-option={option} key={option}>
                                {option}
                                <img className={styles.checkMark} alt='check mark'/>
                            </p>
                        )
                    })}
                </div>
            </div>

        </fieldset>
    )
})

export default SelectInput;
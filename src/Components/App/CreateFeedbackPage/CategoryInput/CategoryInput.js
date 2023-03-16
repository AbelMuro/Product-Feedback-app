import React, {useState, useRef, useEffect, forwardRef, useImperativeHandle} from 'react'
import images from './images';
import styles from './styles.module.css';

const CategoryInput = forwardRef((props, ref) => {
    const [category, setCategory] = useState('Feature');
    const [openPopup, setOpenPopup] = useState(false);
    const popupRef = useRef();
    const arrowRef = useRef();

    const handlePopup = () => {
        setOpenPopup(!openPopup);
    }   

    const handleOption = (e) => {
        const choosenCategory = e.target.getAttribute('data-category');
        setCategory(choosenCategory);
    }

    useImperativeHandle(ref, () => ({
        get state() {
            return category;
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


    /* adding a checkmark next to the option that the user choose*/
    useEffect(() => {
        const allOptions = document.querySelectorAll('.' + styles.option);

        allOptions.forEach((option) => {                                        //removing all checkmarks
            const checkMark = option.childNodes[1].src;
            if(checkMark)
                option.childNodes[1].src = ''
        }, [category])

        allOptions.forEach((option) => {                                        //adding a checkmark next to the option that the user choose
            if(option.getAttribute('data-category') == category)
                option.childNodes[1].src = images['checkMark']
        })
    }, [category])

    return(
        <fieldset className={styles.container}>
            <h4 className={styles.title}>
                Category
            </h4>
            <p className={styles.desc}>
                Choose a category for your feedback
            </p>
            <div className={styles.selectBox} onClick={handlePopup}>
                {category} <img src={images['arrowDown']} className={styles.arrow} alt='arrow down' ref={arrowRef}/>
                <div className={styles.popup} ref={popupRef}>
                    <p className={styles.option} onClick={handleOption} data-category='Feature'>
                        Feature <img className={styles.checkMark}/>
                    </p>
                    <p className={styles.option} onClick={handleOption} data-category='UI'>
                        UI <img className={styles.checkMark}/>
                    </p>
                    <p className={styles.option} onClick={handleOption} data-category='UX'>
                        UX <img className={styles.checkMark}/>
                    </p>
                    <p className={styles.option} onClick={handleOption} data-category='Enhancement'>
                        Enhancement <img className={styles.checkMark}/>
                    </p>
                    <p className={styles.option} onClick={handleOption} data-category='Bug'>
                        Bug <img className={styles.checkMark}/>
                    </p>
                </div>
            </div>

        </fieldset>
    )
})

export default CategoryInput;
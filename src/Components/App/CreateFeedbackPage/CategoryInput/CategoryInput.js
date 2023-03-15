import React, {useState, useRef, useEffect} from 'react'
import images from './images';
import styles from './styles.module.css';

function CategoryInput() {
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
                        Feature
                    </p>
                    <p className={styles.option} onClick={handleOption} data-category='UI'>
                        UI
                    </p>
                    <p className={styles.option} onClick={handleOption} data-category='UX'>
                        UX
                    </p>
                    <p className={styles.option} onClick={handleOption} data-category='Enhancement'>
                        Enhancement
                    </p>
                    <p className={styles.option} onClick={handleOption} data-category='Bug'>
                        Bug
                    </p>
                </div>
            </div>

        </fieldset>
    )
}

export default CategoryInput;
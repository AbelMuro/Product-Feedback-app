import React, {useState, useEffect, useRef} from 'react';
import styles from './styles.module.css';
import images from './images';


function SelectBox() {
    const [filter, setFilter] = useState('Most Upvotes');
    const popupRef = useRef();
    const arrowRef = useRef();

    const handlePopup = () => {
        const isDisplayed = popupRef.current.style.display;
        if(isDisplayed){
            popupRef.current.style.display = '';
            arrowRef.current.style.transform = ''
        }
            
        else {
            popupRef.current.style.display = 'block';
            arrowRef.current.style.transform = 'rotate(180deg)'
        }
            
    }

    const handleClick = (e) => {
        const filterOption = e.target.getAttribute('data-sort');
        setFilter(filterOption);
    }


//removing all check marks from the popup
    useEffect(() => {
        const checkMarks = document.querySelectorAll(`.${styles.checkMark}`);           
        checkMarks.forEach((mark) => {
            if(mark.src != '')
                mark.src = '';
        })

    }, [filter])

//adding a check mark to the option that the user choose
    useEffect(() => {
        const sortingOptions = document.querySelector(`.${styles.popup}`);              
        sortingOptions.childNodes.forEach((option) => {
            if(option.getAttribute('data-sort') == filter)
                option.childNodes[1].src = images['check']
        })

    }, [filter])


    return(
        <section className={styles.container} onClick={handlePopup}>
            <p className={styles.title}>
                Sort by : &nbsp;
            </p>
            <div className={styles.selectBox}>
                {filter} &nbsp;<img src={images['arrow']} className={styles.arrow} ref={arrowRef}/>
            </div>
            <div className={styles.popup} ref={popupRef}>
                <div className={styles.sortingOption} data-sort='Most Upvotes' onClick={handleClick}>
                    Most Upvotes <img src={images['check']} className={styles.checkMark}/>
                </div>
                <div className={styles.sortingOption} data-sort='Least Upvotes' onClick={handleClick}>
                    Least Upvotes <img src='' className={styles.checkMark}/>
                </div>
                <div className={styles.sortingOption} data-sort='Most Comments' onClick={handleClick}>
                    Most Comments <img src='' className={styles.checkMark}/>
                </div>
                <div className={styles.sortingOption} data-sort='Least Comments' onClick={handleClick}>
                    Least Comments <img src='' className={styles.checkMark}/>
                </div>
            </div>
        </section>
        )
}

export default SelectBox;
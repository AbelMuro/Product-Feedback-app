import React, {useState, useEffect, useRef} from 'react';
import {useDispatch} from 'react-redux';
import styles from './styles.module.css';
import images from './images';


function SelectBox() {
    const dispatch = useDispatch();
    const [sort, setSort] = useState('Most Upvotes');
    const [openPopup, setOpenPopup] = useState(false);
    const popupRef = useRef();
    const arrowRef = useRef();

    const handlePopup = () => {
        setOpenPopup(!openPopup);           
    }

    const handleClick = (e) => {
        const sorting = e.target.getAttribute('data-sort');
        setSort(sorting);
    }

//displaying the popup when the user clicks on the select box
    useEffect(() => {
        if(openPopup){
            popupRef.current.style.display = 'block';
            arrowRef.current.style.transform = 'rotate(180deg)'            
        }
        else {
            popupRef.current.style.display = '';
            arrowRef.current.style.transform = ''
        }
    }, [openPopup])


//removing all check marks from the popup
    useEffect(() => {
        const checkMarks = document.querySelectorAll(`.${styles.checkMark}`);           
        checkMarks.forEach((mark) => {
            if(mark.src != '')
                mark.src = '';
        })
    }, [sort])

//adding a check mark to the option that the user choose
    useEffect(() => {
        const sortingOptions = document.querySelector(`.${styles.popup}`);              
        sortingOptions.childNodes.forEach((option) => {
            if(option.getAttribute('data-sort') == sort)
                option.childNodes[1].src = images['check']
        })
    }, [sort])

//dispatching actions to the reducer
    useEffect(() => {
        dispatch({type: 'set sort', sort: sort});
    }, [sort])


    return(
        <section className={styles.container} onClick={handlePopup}>
            <p className={styles.title}>
                Sort by : &nbsp;
            </p>
            <div className={styles.selectBox}>
                {sort} &nbsp;<img src={images['arrow']} className={styles.arrow} ref={arrowRef}/>
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
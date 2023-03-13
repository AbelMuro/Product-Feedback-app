import React, {useState, useEffect} from 'react';
import styles from './styles.module.css';
import images from './images';


function SelectBox() {
    const [filter, setFilter] = useState('Most Upvotes');


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
                option.childNodes[1].src=images['check']
        })

    }, [filter])

    return(
        <section className={styles.container}>
            <p className={styles.title}>
                Sort by : &nbsp;
            </p>
            <div className={styles.selectBox}>
                {filter} &nbsp;<img src={images['arrow']} className={styles.arrow}/>
            </div>
            <div className={styles.popup}>
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
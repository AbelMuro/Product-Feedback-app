import React, {useEffect, useState} from 'react';
import styles from './styles.module.css';
import { useDispatch} from 'react-redux';

function Filter() {
    const dispatch = useDispatch();
    const [filter, setFilter] = useState('All');

    const handleClick = (e) => {
        const filterOption = e.target.getAttribute('data-filter');
        setFilter(filterOption);
    }


//removing the class (that adds a blue background) from all filter buttons
    useEffect(() => {
        const allFilterOptions = document.querySelectorAll('.' + styles.option);
        allFilterOptions.forEach((option) => {
            const hasOptionChoosenClass = option.classList.contains(styles.optionChoosen);
            if(hasOptionChoosenClass)
                option.classList.remove(styles.optionChoosen);
        })

    }, [filter])

//adding the class (that adds a blue background) to the filter button that the user clicked on
   useEffect(() => {
        const allFilterOptions = document.querySelectorAll('.' + styles.option);
        allFilterOptions.forEach((option) => {
            const filterOption = option.getAttribute('data-filter')
            if(filterOption == filter)
                option.classList.add(styles.optionChoosen);
        })
    }, [filter])


    useEffect(() => {
        dispatch({type: 'set filter', filter: filter});
    }, [filter])

    return(
        <div className={styles.flexItem}>                               {/* this div is only here to enable min-height on the container element below*/}
            <section className={styles.container}>
                <div className={styles.flex}>
                    <div className={[styles.option, styles.optionChoosen].join(" ")} onClick={handleClick} data-filter='All'>
                        All
                    </div>
                    <div className={styles.option} onClick={handleClick} data-filter='UI'>
                        UI
                    </div>
                    <div className={styles.option} onClick={handleClick} data-filter='UX'>
                        UX
                    </div>
                    <div className={styles.option} onClick={handleClick} data-filter='Enhancement'>
                        Enhancement
                    </div>
                    <div className={styles.option} onClick={handleClick} data-filter='Bug'>
                        Bug
                    </div>
                    <div className={styles.option} onClick={handleClick} data-filter='Feature'>
                        Feature
                    </div>
                </div>
            </section>            
        </div>

    )
}

export default Filter;

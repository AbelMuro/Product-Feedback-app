import React, {useEffect} from 'react';
import styles from './styles.module.css';
import { useDispatch, useSelector } from 'react-redux';

function Filter() {
    const dispatch = useDispatch();
    const currentFilter = useSelector(state => state.filter);


    const handleClick = (e) => {
        const filterOption = e.target.getAttribute('data-filter');
        dispatch({type: 'set filter', filter: filterOption});
    }

    useEffect(() => {
        const allFilterOptions = document.querySelectorAll('.' + styles.option);
        allFilterOptions.forEach((option) => {
            const hasOptionChoosenClass = option.classList.contains(styles.optionChoosen);
            if(hasOptionChoosenClass)
                option.classList.remove(styles.optionChoosen);
        })

    }, [currentFilter])

    useEffect(() => {
        const allFilterOptions = document.querySelectorAll('.' + styles.option);
        allFilterOptions.forEach((option) => {
            const filter = option.getAttribute('data-filter')
            if(filter == currentFilter)
                option.classList.add(styles.optionChoosen);
        })
    }, [currentFilter])

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

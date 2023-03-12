import React, {useCallback} from 'react';
import styles from './styles.module.css';
import { useDispatch, useSelector } from 'react-redux';

function Filter() {
    const dispatch = useDispatch();
    const currentFilter = useSelector(state => state.filter);


    const handleClick = (e) => {
        const filterOption = e.target.getAttribute('data-filter');
        dispatch({type: 'set filter', filter: filterOption});
    }

    const allFiltersRef = useCallback((ref) => {
            if(!ref)
                return;
            else{
                ref.childNodes.forEach((node) => {
                    const filter = node.getAttribute('data-filter');
                    if(filter == currentFilter){
                        const lastOptionChoosen = document.querySelector('.' + styles.optionChoosen);
                        lastOptionChoosen.classList.remove(styles.optionChoosen)
                        node.classList.add(styles.optionChoosen)
                    }
                        
                })
            }
    }, [currentFilter]) 

    return(
        <section className={styles.container}>
            <div className={styles.flex} ref={allFiltersRef}>
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
    )
}

export default Filter;

import React, {useState, useEffect, useRef, forwardRef, useImperativeHandle} from 'react';
import styles from './styles.module.css';
import icons from './Icons';


const UpdateStatus = forwardRef(({previousStatus, options}, ref) => {
    const [status, setStatus] = useState(previousStatus);
    const [openPopup, setOpenPopup] = useState(false);
    const popupRef = useRef();
    const arrowRef = useRef();


    const handlePopup = () => {
        setOpenPopup(!openPopup);
    }

    const handleOption = (e) => {
        const newStatus = e.target.getAttribute('data-status');
        setStatus(newStatus)
    }

    /* display popup */
    useEffect(() => {
        if(openPopup)
            popupRef.current.style.display = 'block';
        else
            popupRef.current.style.display = '';
    }, [openPopup])

    /* rotating the arrow in select box when the user clicks on it */
    useEffect(() => {
        if(openPopup)
            arrowRef.current.style.transform = 'rotate(180deg)';
        else
            arrowRef.current.style.transform = '';
    }, [openPopup])

    useEffect(() => {
        const allOptions = document.querySelectorAll('.' + styles.checkMark);
        allOptions.forEach((option) => {                                            //removing all checkmarks from the popup                             
            option.src = '';
        })
    }, [status])

    useEffect(() => {
        const allOptions = document.querySelectorAll('.' + styles.option);
        allOptions.forEach((option) => {                                        //removing all checkmarks from the popup
            const optionStatus = option.getAttribute('data-status');
            if(optionStatus == status)
                option.childNodes[1].src = icons['checkMark'];  
        })
    }, [status])

    useImperativeHandle(ref, () => ({
        get state() {
            return status;
        }
    }))

    return(
        <section className={styles.container}>
            <h4 className={styles.title}>
                Update Status
            </h4>
            <p className={styles.desc}>
                Change feature state
            </p>
            <div className={styles.selectBox} onClick={handlePopup}>
                {status}
                <img src={icons['arrowUp']} className={styles.arrowUp} ref={arrowRef}/>
                <div className={styles.popup} ref={popupRef}>
                    {options.map((option) => {
                        return(
                            <div className={styles.option} data-status={option} key={option} onClick={handleOption}>
                                {option}<img className={styles.checkMark}/>
                            </div>
                        )
                    })}
                </div>
            </div>

        </section>
    )
})

export default UpdateStatus;
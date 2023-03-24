import React, {useState, useEffect} from 'react';
import useMediaQuery from '../../../ReusableComponents/useMediaQuery';
import { useDispatch } from 'react-redux';
import {collection} from 'firebase/firestore';
import {useCollectionData} from 'react-firebase-hooks/firestore';
import {db} from './../../../Firebase';
import styles from './styles.module.css';

function StatusBar() {
    const tablet = useMediaQuery('(min-width: 608px)');
    const mobile = useMediaQuery('(max-width: 607px)');
    const dispatch = useDispatch();
    const collectionRef = collection(db, 'posts');
    const [statusSelected, setStatusSelected] = useState('Planned')
    const [allPosts, loading] = useCollectionData(collectionRef);

    const countPostsWithStatus = (status) => {
        let totalNumber = 0;
        allPosts.map((post) => {
            if(post.status == status)  
                totalNumber++;
        })
        return totalNumber;
    }

    const handleStatusClick = (e) => {
        const status = e.target.getAttribute('data-status')
        setStatusSelected(status);
    }   

//removing all the bottom purple borders of the status links and adding a 0.4 opacity to the 'title' node
    useEffect(() => {
        if(tablet) return;

        const allStatus = document.querySelectorAll('.' + styles.statusTitle);
        allStatus.forEach((status) => {
            status.style.borderBottom = '';
            status.firstElementChild.style.color = 'rgba(58, 67, 116, 0.4)';
        })
    }, [statusSelected, tablet])

//adding a bottom purple border to the status link that the user selected and making the 'title' node more opaque
    useEffect(() => {
        if(tablet) return;

        const allStatus = document.querySelectorAll('.' + styles.statusTitle);
        allStatus.forEach((status) => {
            if(status.getAttribute('data-status') == statusSelected){
                status.style.borderBottom = '4px solid #AD1FEA';
                status.firstElementChild.style.color = 'rgb(58, 67, 116)';                
            }
        })
    }, [statusSelected, tablet])

/* i am removing all the inline-styles that were applied to this component when the user exits mobile*/
    useEffect(() => {
        if(!tablet) return;
        
        const allStatus = document.querySelectorAll('.' + styles.statusTitle);
        allStatus.forEach((status) => {
            status.style.borderBottom = '';
            status.firstElementChild.style.color = '';  
        })

    }, [tablet])

//dispatching the status to the redux store
    useEffect(() => {
        dispatch({type: 'set status', status: statusSelected})
    }, [statusSelected])


    return(
        <section className={styles.container}>
            <div className={styles.statusTitle} onClick={mobile ? handleStatusClick : null} data-status={'Planned'}>
                <h4 className={styles.title}>
                    {`Planned (${loading ? '' : countPostsWithStatus('Planned')})`}
                </h4>
                <p className={styles.desc}>
                    Ideas prioritized for research
                </p>
            </div>
            <div className={styles.statusTitle} onClick={mobile ? handleStatusClick : null} data-status={'In-Progress'}>
                <h4 className={styles.title}>
                    {`In-Progress (${loading ? '' : countPostsWithStatus('In-Progress')})`}
                </h4>
                <p className={styles.desc}>
                    Currently being developed
                </p>
            </div>
            <div className={styles.statusTitle} onClick={mobile ? handleStatusClick : null} data-status={'Live'}>
                <h4 className={styles.title}>
                    {`Live (${loading ? '' : countPostsWithStatus('Live')})`}
                </h4>
                <p className={styles.desc}>
                    Released features
                </p>
            </div>                
        </section>
        )
}

export default StatusBar;
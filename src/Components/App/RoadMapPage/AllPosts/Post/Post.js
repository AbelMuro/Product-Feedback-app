import React, {useCallback} from 'react';
import {useNavigate} from 'react-router-dom';
import Upvotes from './../../../ReusableComponents/Upvotes';
import styles from './styles.module.css';
import icons from './Icons';

function Post({post}) {
    const navigate = useNavigate();

    const dotRef = useCallback((ref) => {
        if(!ref) return;

        if(post.status == 'Planned')
            ref.style.backgroundColor = '#F49F85';

        else if(post.status == 'In-Progress')
            ref.style.backgroundColor = '#AD1FEA';

        else if(post.status == 'Live')
            ref.style.backgroundColor = '#62BCFA';

    })

    const containerRef = useCallback((ref) => {
        if(!ref) return;

        if(post.status == 'Planned')
            ref.style.borderTop = '6px solid #F49F85';

        else if(post.status == 'In-Progress')
            ref.style.borderTop = '6px solid #AD1FEA';

        else if(post.status == 'Live')
            ref.style.borderTop = '6px solid #62BCFA';
    })

    const handleClick = () => {
        navigate('/:post', {state: post.id})
    }

    return(
        <section className={styles.container} ref={containerRef}>
            <div className={styles.dotStatus}>
                <div className={styles.dot} ref={dotRef}></div>
                {post.status}
            </div>
            <a className={styles.titleLink} onClick={handleClick}>
                {post.title}
            </a>
            <p className={styles.desc}>
                {post.feedback}
            </p>
            <div className={styles.category}>
                {post.category}
            </div>
            <div className={styles.upvotes_comment}>
                <Upvotes upvote={post.upvotes} row={true}/>            
                <div className={styles.commentContainer}>
                    <img src={icons['commentIcon']} className={styles.commentIcon}/>
                    {post.comments}
                </div>   
            </div>
        </section>
    )
}

 export default Post;
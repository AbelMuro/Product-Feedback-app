import React, {useEffect, useState} from 'react';
import LoadingPosts from './LoadingPosts';
import NoFeedbackYet from './NoFeedbackYet';
import Upvotes from './../../../ReusableComponents/Upvotes';
import styles from './styles.module.css';
import images from './images';
import {useSelector} from 'react-redux';
import {collection, query, orderBy} from 'firebase/firestore';
import {useCollectionData} from 'react-firebase-hooks/firestore';       
import {useNavigate} from 'react-router-dom'; 
import {db} from './../../../Firebase';

function Posts() {
   const [displayMessage, setDisplayMessage] = useState(false);
   const navigate = useNavigate();    
   const sort = useSelector(state => state.sort);                               //selecting a slice of the state from reduc store
   const filter = useSelector(state => state.filter);
   const sortOption = sort.includes('Upvotes') ? 'upvotes' : 'comments';        //we decide if we want to sort the posts based on comments or upvotes
   const postsCollectionRef = collection(db, 'posts');
   const q = query(                                                             //sorting the posts in ascending or descending order                
        postsCollectionRef, 
        sort.includes('Most') ? orderBy(sortOption, 'desc') : orderBy(sortOption),
    );
   const [posts, loading] = useCollectionData(q);          

   const handlePost = (e) => {  
        if(!e.target.matches('#upvotes')){                                      //the user will navigate to the /:post route as long as they dont click on the upvotes component
            const postID = e.target.getAttribute('id');
            navigate('/post', {state: postID});
        }
   }

   useEffect(() => {
        if(loading) return;
        if(filter == 'All') {
            setDisplayMessage(false);
            return
        }

        const filteredPosts = posts.filter((post) => {          //we filter out the posts that don't have the category that the user requested
            if(post.category == filter)
                return true;
            else 
                return false;
        })

        if(!posts.length || !filteredPosts.length)
            setDisplayMessage(true)
        else 
            setDisplayMessage(false);


   }, [filter, loading])

    return(
        <section className={styles.container}>
            {loading ? <LoadingPosts/> : 
                displayMessage ?  <NoFeedbackYet/> :
                    posts.map((post) => {
                        if(filter != 'All' && post.category != filter)          //we will skip the post that is NOT in the same category that the user requested
                            return;

                        return(                
                            <div className={styles.post} id={post.id} key={post.id} onClick={handlePost}>
                                <Upvotes upvote={post.upvotes} postID={post.id}/>                                         
                                <div className={styles.postInfo} >
                                    <h3 className={styles.title}>
                                        {post.title}
                                    </h3>
                                    <p className={styles.desc}>
                                        {post.feedback}
                                    </p>
                                    <div className={styles.category}>
                                        {post.category}
                                    </div>                                    
                                </div>
                                <div className={styles.commentContainer}>
                                    <img src={images['commentBubble']} className={styles.commentIcon}/>
                                    {post.comments}
                                </div>                                
                            </div>
                        )
                })
            }                  
            </section>
            )
}

export default Posts;
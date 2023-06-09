import React, {useState, useEffect, useRef} from 'react';
import {auth, db} from './../../Firebase';
import { GoogleAuthProvider, signInWithPopup} from 'firebase/auth';
import {doc, updateDoc, getDoc, arrayUnion, increment} from 'firebase/firestore';
import styles from './styles.module.css';

function Upvotes({upvote, postID, row}){
    const [upvotes, setUpvotes] = useState(upvote);
    const containerRef = useRef();
    const userAlreadyUpvoted = useRef(false);

    const handleClick = async () => {
        if(auth.currentUser){
            checkUserIfTheyUpvotedBefore();
            return;
        } 
        const answer = confirm('You must be logged in with google to upvote a feedback post, would you like to log in?');
        if(!answer) return;
        try{
            const provider = new GoogleAuthProvider();
            await signInWithPopup(auth, provider);
        }
        catch(error){
            alert('Please enable popups in your browser')
        }


    }   

    const checkUserIfTheyUpvotedBefore = async () => {
        try{
            const postRef = doc(db, `posts/${postID}`);
            const snapshot = await getDoc(postRef);
            if(!snapshot) return; 
            
            const data = snapshot.data();
            data.peopleWhoUpvoted.forEach((people) => {         //people is just a long string that represents an ID
                if(people == auth.currentUser.uid)
                    userAlreadyUpvoted.current = true;
            })

            if(userAlreadyUpvoted.current)
                alert('You have already upvoted, stop spamming this instance!');
            else{
                setUpvotes(upvotes + 1);
                addUserToDatabase();  
                updateNumberOfUpvotesInDatabase()          
            }            
        }
        catch(error){
            console.log(error);
        }
    }

    const addUserToDatabase = async () =>  {
        const postRef = doc(db, `posts/${postID}`);
        try{
            await updateDoc(postRef, {
                peopleWhoUpvoted: arrayUnion(auth.currentUser.uid)
            })            
        }
        catch(error){
            console.log(error);
        }
    }    

    const updateNumberOfUpvotesInDatabase = async () => {
        const docRef = doc(db, `posts/${postID}`);
        try{
            await updateDoc(docRef, {
                upvotes: increment(1)
            })             
        }
        catch(error){
            console.log(error);
        }
    }
    /* this will style the upvote component when the user has clicked on it */
    useEffect(() => {
        if(upvotes != upvote)
            containerRef.current.classList.add(styles.upvoted);
    }, [upvotes])

    /* this useEffect is only used for the RoadMap page route , i wanted to re-use this component but i needed to re-style it first*/
    useEffect(() => {
        if(row){
            containerRef.current.style.flexDirection = 'row';
            containerRef.current.style.minWidth = '69px';
            containerRef.current.style.height = '40px';
            containerRef.current.style.gap = '12.5px';
        }
    }, [])

    return(
        <section id='upvotes' className={styles.container} onClick={handleClick} ref={containerRef}>
            <div className={styles.arrow}></div>
            {upvotes}
        </section>
    )
}

export default Upvotes;
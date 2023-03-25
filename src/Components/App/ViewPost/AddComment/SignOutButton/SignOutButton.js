import React, {useState, memo} from 'react';
import styles from './styles.module.css';
import {auth} from './../../../Firebase';
import { signOut, onAuthStateChanged} from 'firebase/auth';

function SignOutButton() {
    const [userIsLoggedOn, setUserIsLoggedOn] = useState(false);

    const signingOut = async () => {
        await signOut(auth);
        alert('You have been logged out')
    }

    onAuthStateChanged(auth, (user) => {
        if(user)
            setUserIsLoggedOn(true);
        else 
            setUserIsLoggedOn(false);

    })

    return(
        <>
            {userIsLoggedOn ? 
                <button className={styles.signOut} type='button' onClick={signingOut}>
                    Sign out
                </button> : <></>
            }        
        </>

    )
}

export default memo(SignOutButton);
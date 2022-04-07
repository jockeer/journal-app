import { googleAuthProvider, auth } from "../firebase/firebaseConfig";

import { types } from "../types/types"
import { signInWithPopup, createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';

export  const startLoginEmailPassword = (email, password)=>{
    return (dispatch) => {

        setTimeout(() => {
            dispatch( login(email,password) )
        }, 3500);

    }
}

export const startRegister = (name, email, password) =>{
    return (dispatch)=>{
        createUserWithEmailAndPassword(auth, email, password)
            .then(async ({ user }) => {
                await updateProfile(user, {displayName:name})
                // await user.updateProfile({displayName:name})
                dispatch(
                    login(user.uid, user.displayName)
                )
            }).catch( e => {
                console.log(e);
            })
    }
} 

export const startGoogleLogin = () => {
    return (dispatch) => {
        signInWithPopup( auth, googleAuthProvider )
            .then(({user}) => {
                dispatch(
                    login(user.uid, user.displayName)
                )
            })
    }
}

export const login = ( uid, displayName ) => {
    return {
        type: types.login,
        payload:{
            uid,
            displayName
        }
    }
}
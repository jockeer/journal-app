import { googleAuthProvider, auth } from "../firebase/firebaseConfig";

import { types } from "../types/types"
import { signInWithPopup, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { finishLoading, startLoading } from "./ui";

export  const startLoginEmailPassword = (email, password)=>{
    return (dispatch) => {

        dispatch(startLoading())
        
        signInWithEmailAndPassword(auth, email, password)
            .then(async ({ user }) => {
                dispatch(
                    login(user.uid, user.displayName)
                )
                dispatch(finishLoading())
            }).catch( e => {
                console.log(e);
                dispatch(finishLoading())
            }); 


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

export const startLogout = () => {
    return async (dispatch) => {
        await signOut(auth)
        
        dispatch(logout())
    }
}
export const logout = () => {
    return {
        type: types.logout
    }
}
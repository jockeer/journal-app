import { googleAuthProvider, auth } from "../firebase/firebaseConfig";

import { types } from "../types/types"
import { signInWithPopup } from 'firebase/auth';

export  const startLoginEmailPassword = (email, password)=>{
    return (dispatch) => {

        setTimeout(() => {
            dispatch( login(email,password) )
        }, 3500);

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
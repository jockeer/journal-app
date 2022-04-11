import { onAuthStateChanged } from 'firebase/auth'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

import {BrowserRouter, Route, Routes} from 'react-router-dom'
import { JournalScreen } from '../components/journal/JournalScreen'
import { auth } from '../firebase/firebaseConfig'
import { login } from '../helpers/auth'
import { startLoginNotes } from '../helpers/notes'
import { AuthRouter } from './AuthRouter'
import { PrivateRoute } from './PrivateRoutes'
import { PublicRoute } from './PublicRoutes'

export const AppRouter = () => {

  const dispatch = useDispatch()

  const [checking, setChecking] = useState(true)

  useEffect(() => {
    onAuthStateChanged(auth, (user)=>{
      if (user?.uid) {
        dispatch( login(user.uid, user.displayName) )

        dispatch(startLoginNotes(user.uid))

      }
      setChecking(false)
    })
  }, [dispatch, setChecking])

  if (checking) {
    return <h1>Wait...</h1>
  }
  

  return (
    <BrowserRouter>
        <Routes>

            {/* <Route path='/auth/*' element = {<AuthRouter />}/> */}
            <Route path='/auth/*' element = {
              <PublicRoute>
                <AuthRouter />
              </PublicRoute>
            }/>

            {/* <Route path='/' element={<JournalScreen /> }/> */}
            <Route path='/' element={
              <PrivateRoute>
                <JournalScreen /> 
              </PrivateRoute>
            }/>

        </Routes>
    </BrowserRouter>
  )
}

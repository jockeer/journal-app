import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { startLogout } from '../../helpers/auth'
import { startNewNote } from '../../helpers/notes'
import { JournalEntries } from './JournalEntries'

export const Sidebar = () => {

    const dispatch = useDispatch()

    const {name} = useSelector(state => state.auth)

    const handleLogout = () => {

        // console.log('click');
        dispatch( startLogout() )
    }

    const handleAddNew = () => {
        dispatch(startNewNote())
    }

  return (
    <aside className='journal__sidebar d-flex flex-column pl-2'>
        
        <div className="journal__sidebar-navbar d-flex justify-content-between">
            <h3 className='mt-4'>
                <i className="far fa-moon"></i>
                <span>{name}</span>
            </h3>
            <button className='btn' onClick={handleLogout}>
                Logout
            </button>
        </div>

        <div className="journal__new-entry d-flex" onClick={handleAddNew}>
            <i className="far fa-calendar-plus fa-5x"></i>
            <p className='mt-3'>New Entry</p>
        </div>

        <JournalEntries />

    </aside>
  )
}

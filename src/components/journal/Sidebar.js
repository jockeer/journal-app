import React from 'react'
import { JournalEntries } from './JournalEntries'

export const Sidebar = () => {
  return (
    <aside className='journal__sidebar d-flex flex-column pl-2'>
        
        <div className="journal__sidebar-navbar d-flex justify-content-between">
            <h3 className='mt-4'>
                <i className="fa fa-moon"></i>
                <span>Daniel</span>
            </h3>
            <button className='btn'>
                Logout
            </button>
        </div>

        <div className="journal__new-entry d-flex">
            <i className="far fa-calendar-plus fa-5x"></i>
            <p className='mt-3'>New Entry</p>
        </div>

        <JournalEntries />

    </aside>
  )
}
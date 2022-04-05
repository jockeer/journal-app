import React from 'react'
import { NotesAppBar } from './NotesAppBar'

export const NoteScreen = () => {
  return (
    <div className='notes__main-content'>
        <NotesAppBar />

        <div className="notes__content">
          
          
        <input type="text" placeholder='Some awesome title' className='form-control notes__title-input' autoComplete='off'/>

        <textarea placeholder='What happened today' className='form-control notes__text-input'></textarea>
        <br />
        <div className="notes__image">
          <img src="https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg" alt="image" />
        </div>
         

        </div>
    </div>
  )
}

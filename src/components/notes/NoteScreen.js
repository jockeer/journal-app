import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { activeNote } from '../../helpers/notes'
import useForm from '../../hooks/useForm'
import { NotesAppBar } from './NotesAppBar'

export const NoteScreen = () => {

  const dispatch = useDispatch()

  const { active:note } = useSelector(state => state.notes)

  const [ formValues, handleInputChange, reset ] = useForm(note)

  const { body, title } = formValues 

  const activeId = useRef( note.id )

  useEffect(() => {
    
    if (note.id !== activeId.current) {
      reset( note )
      activeId.current = note.id
    }

  
  }, [note,reset])
  

  useEffect(() => {
    dispatch(activeNote( formValues.id, { ...formValues } ))
  }, [formValues, dispatch])
  

  return (
    <div className='notes__main-content'>
        <NotesAppBar />

        <div className="notes__content">
          
          
        <input type="text" value={ title } name='title' onChange={handleInputChange} placeholder='Some awesome title' className='form-control notes__title-input' autoComplete='off'/>

        <textarea value={body} onChange={handleInputChange} name='body' placeholder='What happened today' className='form-control notes__text-input' ></textarea>
        <br />

        {
          note.url &&
          <div className="notes__image">
            <img src="https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg" alt="imagen" />
          </div>
        }
         

        </div>
    </div>
  )
}

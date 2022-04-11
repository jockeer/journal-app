import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import moment from 'moment'
import { startSaveNote, startUploading } from '../../helpers/notes'

export const NotesAppBar = () => {
  const { active } = useSelector(state => state.notes)

  const dispatch = useDispatch()

  const handleSave = () => {
    // console.log(active);
    dispatch(startSaveNote(active))
  }
  const handleImage = () => {
    document.querySelector('#fileSelector').click()
  }
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      dispatch(startUploading(file))
    }
    // dispatch(startSaveNote(active))
  }
  return (
    <div className='notes__appbar'>
        <span>
          { active 
            ? `${moment(active.date).format('D')} de ${moment(active.date).format('MMMM')} ${moment(active.date).format('YYYY')}`
            : '28 de agosto 2020'
          }
        </span>
          <input id='fileSelector' type="file" style={{ display:'none' }} onChange={ handleFileChange }/>
        <div>
            <button className='btn' onClick={handleImage}>
                Picture
            </button>
            <button className='btn' onClick={handleSave}>
                Save
            </button>
        </div>
    </div>
  )
}

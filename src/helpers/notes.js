import { addDoc, collection, deleteDoc, doc, setDoc } from "firebase/firestore"
import Swal from "sweetalert2"
import { db } from "../firebase/firebaseConfig"
import { types } from "../types/types"
import { fileUpload } from "./fileUpload"
import { loadNotes } from "./loadNotes"
//react-journal
export const startNewNote = () => {
    return async (dispatch, getState) => {
        const { uid } = getState().auth
        const newNote = {
            title:'',
            body:'',
            date: new Date().getTime()
        }
        try {
            const doc = await addDoc( collection(db,`${uid}/journal/notes`), newNote)
            dispatch( activeNote( doc.id, newNote ) )
            dispatch(addNewNote(doc.id, newNote))
            
        } catch (error) {
            console.log(error);
        }
    }
}

export const activeNote = ( id, note ) => {
    return {
        type: types.notesActive,
        payload: {
            id,
            ...note
        }
    }
}

export const addNewNote = (id,note) => {
return {
    type:types.notesAddNew,
    payload: {
        id,...note
    }

}
}
 
export const startLoginNotes = ( uid ) => {
    return async ( dispatch ) => {

        const notes = await loadNotes(uid)
          
        dispatch( setNotes(notes) )

    }
}

export const setNotes = ( notes ) => {
    return {
        type: types.notesLoad,
        payload: notes
    }
} 

export const startSaveNote = ( note ) => {
    return async ( dispatch, getState ) => {

        const { uid } = getState().auth
        if (!note.url) {
            delete note.url
        }
        const noteToFirestore = { ...note }
        delete noteToFirestore.id;

        noteToFirestore.date = new Date().getTime()
        try {
            await setDoc(doc(db, `${uid}/journal/notes/${note.id}`), noteToFirestore)

            // dispatch(startLoginNotes(uid))
            dispatch(refreshNote( note.id , noteToFirestore))
            Swal.fire('Saved', note.title, 'success')
            
        } catch (error) {
            console.log(error);
        }

    }
}

export const refreshNote = ( id, note ) =>{
    return {
        type:types.notesUpdated,
        payload:{
            id,
            note:{
                id,
                ...note
            }
        }
    }
}

export const startUploading = ( file ) =>{
    return async (dispatch, getState) => {
        const { active: activeNote } = getState().notes
        Swal.fire({
            title: 'Uploading...',
            text:'Please wait...',
            allowOutsideClick: false,
            showConfirmButton: false,
            willOpen: () => {
                Swal.showLoading()
            }
        })
        const fileURL = await fileUpload( file )
        activeNote.url = fileURL

        dispatch(startSaveNote(activeNote))

        Swal.close()
    }
}

export const startDeleting = ( id ) => {
    return async (dispatch, getState) => {
        const {uid} = getState().auth

        try {
            await deleteDoc(doc(db,`${uid}/journal/notes/${id}`))
            dispatch( deleteNote(id) )
        } catch (error) {
            console.log(error);
        }
    }
}

export const deleteNote = ( id ) => {
    return {
        type:types.notesDelete,
        payload: id
    }
}

export const notesLogoutClening = () => {
    return {
        type: types.notesLogoutClening
    }
}
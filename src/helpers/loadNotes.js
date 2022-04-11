import { collection, getDocs } from "firebase/firestore"
import { db } from "../firebase/firebaseConfig"

export const loadNotes = async ( uid ) => {

    const notesSnap = await getDocs( collection( db,`${uid}/journal/notes` ) )
    const notes = [ ]

    notesSnap.forEach( snap => {
        
        notes.push({
            id: snap.id,
            ...snap.data()
        })
    })
    return notes
}
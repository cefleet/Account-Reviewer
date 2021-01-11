import {useContext, useState} from "react";
import {DBContext} from "../DBContext";
import AddNoteForm from "./AddNoteForm";
import NoteDetails from "./NoteDetails";

const ViewAccount = ({account}) =>{
    const [addNote,setAddNote] = useState(false);
    const {db,setDb} = useContext(DBContext);
    const notes = db.contact_notes.filter(cn=>cn.account===account.account_number)

    const deleteNote = (id) => {
        setDb({...db, contact_notes:[...db.contact_notes.filter(n=>n.id !== id)]})
    };

    return (
        <main>
            <h2>{account.account_number} - {account.first_name} {account.last_name} </h2>
            {!addNote && <button onClick={()=>setAddNote(true)}>Add Note</button>}
            {addNote && <AddNoteForm accountId={account.account_number} noteAdded={()=>setAddNote(false)} />}
            {
                notes.map((note,idx)=><NoteDetails note={note} key={idx} deleteNote={deleteNote}/>)
            }
        </main>
    )
};
export default ViewAccount;
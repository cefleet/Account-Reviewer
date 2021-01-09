import {useContext} from "react";
import {useDataForm} from "react-data-forms";
import {DBContext} from "../DBContext";
import {contact_notes} from "../fields";

const AddNoteForm = ({accountId, noteAdded}) => {
    
    const {setDb, db} = useContext(DBContext);
    const {DataForm} = useDataForm(contact_notes)

    const createNote = (formData) =>{
        console.log(formData);
        
        const newData = {...db, contact_notes:[...db.contact_notes, {...formData, account:accountId}]};
        localStorage.setItem('data', JSON.stringify(newData))
        setDb(newData);

        noteAdded();
    };


    return <DataForm submitText="Save Note" onSubmit={createNote} />
};
export default AddNoteForm;
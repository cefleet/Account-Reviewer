import {contact_notes, maps} from "../fields";

const NoteDetails = ({note, deleteNote})=>{

    const NoteSection = ({section}) =>(
        <section className="note-section">
            <h4>{section.title}</h4>
            <div className="note-section-fields">
                {section.fields.map((field,idx)=><NoteSectionField key={idx} field={field}/>)}
            </div>
        </section>
    )

    const NoteSectionField = ({field}) =>{
        
        const format_text = () => {
            switch(field.type) {
                case 'Dropdown':
                    return field.options[note[field.name]];
                case 'DateType':
                    return new Date(note[field.name]).toLocaleDateString()
                default:
                    return note[field.name];
            }
        };
        

        return(
            <div className={`note-section-field ${field.type.toLowerCase() || 'input'}`}>
                <label>{field.title}</label>
                <p>{format_text()}</p>
            </div>
        )
    }

    const overView = `${new Date(note.contact_date).toLocaleDateString()} - ${maps.contact_type[note.contact_type]}`
    return (
        <details className={`labeled-list ${note.importance}`}>
            <summary>{overView}</summary>
            <button onClick={()=>deleteNote(note.id)} class="delete">Delete Note</button>
            {contact_notes.filter((s,idx)=>idx !== 0).map((section, idx)=><NoteSection key={idx} section={section} />)}
        </details>
    );
};
export default NoteDetails;
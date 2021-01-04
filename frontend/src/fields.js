const maps = {
    contact_type:{
        drop_in:"Drop In",
        telephone_call:"Telephone Call",
        email:"Email",
        txt:"Txt",
        home_visit:"Home Visit",
        work_visit:"Work Visit"
    },
    note_importance:{
        general:"General",
        remider:"Reminder",
        urgent:"Urgent"
    }
};

const contact_notes = [
    {
        title:"Contact Details",
        fields:[
            {title:"Contact Date", name:"contact_date", type:"DateType"},
            {title:"Contact Type", name:"contact_type", type:"Dropdown", options:maps.contact_type}
        ]
    },
    {
        title:"Contact Notes",
        fields:[
            {title:"Importance", name:"importance", type:"Dropdown", options:maps.note_importance}
        ]
    }
]
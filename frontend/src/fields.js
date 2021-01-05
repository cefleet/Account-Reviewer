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

const account = [
    {
        title:"User Account",
        fields:[
            {title:'Acount Number', name:'account_number'},
            {title:'First Name', name:'first_name'},
            {title:'Last Name', name:"last_name"}
        ]
    }
]

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
            {title:"Importance", name:"importance", type:"Dropdown", options:maps.note_importance},
            {title:"Note", name:"note"}
        ]
    },
    {
        title:"Follow Up",
        fields:[
            {title:"Follow Up Date", name:"follow_up_date", type:"DateType"},
            {title:"Details", name:"details"}
        ]
    }
]
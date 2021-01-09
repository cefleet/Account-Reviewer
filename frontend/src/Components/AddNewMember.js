import {useContext} from "react";
import {useDataForm} from "react-data-forms";
import {account} from "../fields";
import {DBContext} from "../DBContext";

const AddNewMember = ({closeForm}) => {

    const {DataForm} = useDataForm({},account)
    const {setDb, db}  = useContext(DBContext);

    const addNewMember = (formData) => {
        console.log(formData);
        const newData = {...db, accounts:[...db.accounts, formData]};
        setDb(newData);
        localStorage.setItem('data', JSON.stringify(newData))
        closeForm();
    }

    return(<DataForm submitText="Add Member" onSubmit={addNewMember} />)
};

export default AddNewMember;
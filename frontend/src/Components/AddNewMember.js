import {useContext} from "react";
import {useDataForm} from "react-data-forms";
import {account} from "../fields";
import {DBContext} from "../DBContext";

const AddNewMember = ({closeForm}) => {

    const {DataForm} = useDataForm(account)
    const {setDb, db}  = useContext(DBContext);

    const addNewMember = (formData) => {
        if(!formData.account_number) return;
        const newData = {...db, accounts:[...db.accounts, formData]};
        setDb(newData);
        localStorage.setItem('data', JSON.stringify(newData))
        closeForm();
    }

    return(<main><DataForm submitText="Add Member" onSubmit={addNewMember} /></main>)
};

export default AddNewMember;
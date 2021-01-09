import {Input} from "react-data-forms";
import {useState, useContext} from "react";
import {DBContext} from "./DBContext";
import AddNewMemeber from "./Components/AddNewMember";
import AccountLine from "./Components/AccountLine";
import ViewAccount from "./Components/ViewAccount"
const  App = () => {

  const {db} = useContext(DBContext);
  const [addingNew, setAddingNew] = useState(false);
  const [searchResults, setSearchResults] = useState(null);
  const [searchValue, setSearchValue] = useState("");
  const [viewing, setViewing] = useState(null);

  const memberNumberChange = ({target:{value}}) => {
    setSearchValue(value);
    setSearchResults(db.accounts.filter(a=>a.account_number.startsWith(value)));
  }

  const accountChosen = (account) =>{
    setSearchResults(null);
    setSearchValue("");
    setViewing(account)
  }

  if(addingNew) return <AddNewMemeber closeForm = {()=>setAddingNew(false)} />

  if(viewing) return <ViewAccount account={viewing} />

  return (
    <div className="App">
      <button onClick={()=>setAddingNew(true)}>Add New Memeber</button>
      <Input title="Find By Member #" onChange={memberNumberChange} value={searchValue} />
      {searchResults && searchResults.length === 0 && <div>No Members Found</div>}
      {searchResults &&
        searchResults.map((account, idx)=><AccountLine account={account} key={idx} viewAccount= {accountChosen} />)
      }
    </div>
  );
}

export default App;

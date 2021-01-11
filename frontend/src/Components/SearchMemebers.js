import {useContext, useState} from "react";
import {DBContext} from "../DBContext";

import AccountLine from "./AccountLine";
import {Input} from "react-data-forms";


const SearchMembers = ({accountChosen}) =>{


    const viewAccount = (account) =>{
        setSearchResults(null);
        setSearchValue("");
        accountChosen(account);
    }

    const [searchResults, setSearchResults] = useState(null);
    const [searchValue, setSearchValue] = useState("");

    const {db} = useContext(DBContext);

   

    const memberNumberChange = ({target:{value}}) => {
        
        const filterFunction = (a) =>{
            let v = String(value).toLowerCase();

            if(a.account_number && a.account_number.toLowerCase().startsWith(v)) return true;
            if(a.first_name && a.first_name.toLowerCase().includes(v)) return true;
            if(a.last_name && a.last_name.toLowerCase().includes(v)) return true;
            return false;
        }

        setSearchValue(value);
        if(!value || value ==="") return setSearchResults(null);
        setSearchResults(db.accounts.filter(filterFunction));
    }
    return (
        <main>
          <Input title="Find By Member by Name or Number" onChange={memberNumberChange} value={searchValue} />
          {searchResults && searchResults.length === 0 && <div>No Members Found</div>}
          {searchResults &&
            searchResults.map((account, idx)=><AccountLine account={account} key={idx} viewAccount= {viewAccount} />)
          }
        </main>
      );
}
export default SearchMembers;
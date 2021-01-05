import {Input} from "react-data-forms";
import {useState, useContext} from "react";
import {DBContext} from "./DBContext";
const  App = () => {

  const {db, setDb} = useContext(DBContext);

  const [searchMemeberNumber, setSearchMemberNumber] = useState(null);

  console.log(db);

  const memberNumberChange = ({target:{value}}) => {
    setSearchMemberNumber(value);

  }

  return (
    <div className="App">
      <Input title="Find By Member #" onChange={memberNumberChange} value={searchMemeberNumber|| ""} />
    </div>
  );
}

export default App;

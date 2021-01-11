import {useState} from "react";
import "./style.css";
import AddNewMemeber from "./Components/AddNewMember";
import ViewAccount from "./Components/ViewAccount"
import SearchMembers from "./Components/SearchMemebers";
const  App = () => {

  const [addingNew, setAddingNew] = useState(false);
  
  const [viewing, setViewing] = useState(null);


  const main = () =>{
    setViewing(null);
    setAddingNew(false);
  }

  const MainContent = () =>{
    if(addingNew) return <AddNewMemeber closeForm = {()=>setAddingNew(false)} />

    if(viewing) return <ViewAccount account={viewing} />

    return <SearchMembers accountChosen={setViewing} />
  }

  return (
      <div>
          <header>
                <h1>Account Reviewer</h1>
                <nav>
                  <button onClick={()=>main()}>Search Memebers</button>
                  <button onClick={()=>setAddingNew(true)}>Add New Memeber</button>
                </nav>
          </header>
          <MainContent />          
      </div>
  )
  
  
}

export default App;

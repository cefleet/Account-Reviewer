import {createContext, useState} from "react";
export const DBContext = createContext(); // Create a context object

//Wrapping the app in this, give every component access to setUser
const DBContextProvider = ({children}) => {
    
    const d = localStorage.getItem('data') 
    const data = d ? JSON.parse(d) : {accounts:[],contact_notes:[]};
    const [db,setDb] = useState(data)
  
    return (
      <DBContext.Provider value={{db, setDb}}>
          {children}
      </DBContext.Provider>
    )
  }

export default DBContextProvider;
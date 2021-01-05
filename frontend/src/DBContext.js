import {createContext, useState} from "react";
export const DBContext = createContext(); // Create a context object

//Wrapping the app in this, give every component access to setUser
const DBContextProvider = ({children}) => {
    const [db,setDb] = useState({})
  
    return (
      <DBContext.Provider value={{db, setDb}}>
          {children}
      </DBContext.Provider>
    )
  }

export default DBContextProvider;
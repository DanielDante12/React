import { createContext } from "react";
const DataContext = createContext({})
export const DataProvider =({children})=>{
    <DataContext.Provider value={{name: "john"}}>
    {children}
    </DataContext.Provider>
}
export default DataContext
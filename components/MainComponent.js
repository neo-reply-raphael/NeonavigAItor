'use client'
import { createContext,useState } from "react"

const keyDefault = {
    key: process.env.OPENAI_API_KEY,
    setKey: () => {}
}
export const KeyContext = createContext(keyDefault);

function MainComponent({children}) {
    const [key,setKey] = useState("")
    return(
        <KeyContext.Provider value={{key,setKey}}>
            {children}
        </KeyContext.Provider>
    )
}
export default MainComponent

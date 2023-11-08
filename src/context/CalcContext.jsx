/* eslint-disable react/prop-types */
import { useState } from "react"
// eslint-disable-next-line no-unused-vars
import { children } from "react"
import { createContext } from "react"

export const CalcContext = createContext()
const CalcProvider = ({ children }) => {
  const [calc, setCalc] = useState({
    sign:"",
    num: 0,
    res: 0
  })

  const providerValue={
    calc, setCalc
  }
  
    return (
    <CalcContext.Provider value={providerValue}>
        {children}
    </CalcContext.Provider>
  )
}

export default CalcProvider
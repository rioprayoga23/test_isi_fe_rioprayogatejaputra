import { createContext, PropsWithChildren, useContext, useState } from "react"
import { initialState, INITIALSTATETYPE } from "./page.type"

const context = createContext<INITIALSTATETYPE>(initialState);

export function PageProvider({ children }:PropsWithChildren){
   return <context.Provider value={{
      action: {},
      state: {}
   }}>
      {children}
   </context.Provider>
}

export default function usePageTest1(){
   useContext(context)
}
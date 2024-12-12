import React, {createContext} from 'react'

export const Context = createContext();

export const ProviderProperty = ({children}) => {
   const name="swati";
   const city = "Yamunanagar";
      return (
      <Context.Provider value={{name,city}}>
        {children}
      </Context.Provider>
  );
 }

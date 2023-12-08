import React from 'react'
import { useState } from 'react';
import { createContext } from 'react';

export const TotalPrice=createContext();
function TotalPriceContext(props) {
    const [totalprice, setTotalprice] = useState(0);
  return (
    <TotalPrice.Provider value={{totalprice,setTotalprice}}>
        {props.children}
    </TotalPrice.Provider>
  )
}

export default TotalPriceContext
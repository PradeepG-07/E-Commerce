import React, { createContext, useState } from 'react'

export const StoreCartContext = createContext([])
function StoreAndCartContext(props) {
	const [store, setStore] = useState([]);
	const [cart, setCart] = useState([])
	return (
		<StoreCartContext.Provider value={{store,setStore,cart,setCart}}>
			{props.children}
		</StoreCartContext.Provider>
	)
}

export default StoreAndCartContext
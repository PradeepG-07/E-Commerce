import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';

import CartItem from './CartItem';
import ItemsNotFound from "../GlobalComponents/ItemsNotFound";

import { StoreCartContext } from '../../contexts/StoreAndCartContext';
import { TotalPrice } from '../../contexts/TotalPriceContext';

const Container = styled.div`
	padding: 20px;
	height: 89vh;
	border-right: 1px solid red;
	overflow-y: scroll;
	&::-webkit-scrollbar {
   		display: none;
	}
`;

function CartItems() {

	const { cart } = useContext(StoreCartContext);
	const {setTotalprice}=useContext(TotalPrice);

	// useEffect(()=>{
	// 	let total=0;
	// 	cart.forEach((cartitem)=>{
	// 		total=total+cartitem.price*100;
	// 	});
	// 	setTotalprice(total)
	// },[cart]);

	return (
		<Container>
			{
				cart.length > 0 ?
					(
						cart.map((cartitem) => {
							return <CartItem item={cartitem} key={cartitem.id}/>
						})
					) :
					(
						<>
							<ItemsNotFound info={"No Item Available"} showBack={true}/>
							
						</>
					)

			}
		</Container>
	)
}

export default CartItems;
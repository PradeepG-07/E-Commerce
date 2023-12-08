import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components';

import Navbar from '../components/GlobalComponents/Navbar'
import Footer from '../components/GlobalComponents/Footer';
import ItemsNotFound from '../components/GlobalComponents/ItemsNotFound';
import ProductItem from '../components/ProductPageComponents/ProductItem';

import { StoreCartContext } from '../contexts/StoreAndCartContext';


const Container = styled.div`
	min-height: 80vh;
	display: flex;
	justify-content: center;
	align-items: center;
	@media screen and (width<768px){
		display: block;
	}
`;




function Products() {
	const { store} = useContext(StoreCartContext);
	const params = useParams();
	const [isValidItem, setIsValidItem] = useState(true);
	const [itemid, setItemid] = useState(null);
	const [currentitem, setCurrentitem] = useState(null);

	useEffect(() => {

		try {
			const itemid = Number(params.id);
			setItemid(itemid);
			store.forEach(item => {
				if (item.id === itemid) {
					setCurrentitem(item);
					setIsValidItem(true);
					
					// console.log(2);
					// console.log(item);
				}
			});
		} catch (error) {
			setIsValidItem(false);
		}

		if (currentitem === null) {
			setIsValidItem(false)
		}

		console.log("PRoduct page rendering");
		// console.log(cart.find(currentitem));

		window.scrollTo(0, 0);
	}, [itemid])



	return (
		<>
			<Navbar home={true} />
			{
				isValidItem ? (
	

			<ProductItem item={currentitem}/>
	
				) : (
					<Container >
						<ItemsNotFound info={"Item Not Found"}/>
					</Container>
				)
			}
			<Footer />
		</>

	)
}

export default Products

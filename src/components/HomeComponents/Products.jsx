import React, { useContext } from 'react'
import styled from 'styled-components'
import Product from './Product';
import { StoreCartContext } from '../../contexts/StoreAndCartContext'

const Container = styled.div`
	min-height: 100vh;
    padding: 50px 20px;
    display: grid;
  	grid-template-columns: repeat(3, 1fr);
  	gap: 20px;
  	place-items: center;
  	grid-auto-rows: minmax(100px, auto);
  
  	@media screen and (width<=300px){
        gap: 0px;
        padding: 20px 20px;
       
    }
  	@media screen and (width<=425px){
    	grid-template-columns: repeat(1, 1fr) !important;
    	gap: 30px;
        padding: 20px 20px;
        
    }
  	@media screen and (width<=720px){
    	grid-template-columns: repeat(2, 1fr);
    }
`;


function Products(props) {
	const { store } = useContext(StoreCartContext);
	return (
		<Container>
			{store.map((item) => {
				return <Product key={item.id} item={item} />
			})}
		</Container>
	)
}

export default Products;
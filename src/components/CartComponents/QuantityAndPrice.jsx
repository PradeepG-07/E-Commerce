import React, { useContext, useEffect, useState } from 'react'
import styled from 'styled-components';
import { CurrencyRupee } from '@mui/icons-material';

import { TotalPrice } from '../../contexts/TotalPriceContext';

const Container = styled.div`
  
`;

const TitleContainer = styled.div`
    
`;

const Title = styled.div`
   
`;
const InfoContainer = styled.div`
	display: flex;
    gap: 20px;
	align-items: center;
	margin: 15px 0;
	font-size: 20px;
	@media screen and (width>600px) and (width<=768px){
		font-size: 15px;
		gap: 10px;
	}
	
`;

const QuantityContainer = styled.div`
    display: flex;
    gap: 10px;
    align-items: center;
`;

const Button = styled.button`
    border: 1px solid black;
    outline: none;
    font-weight: bold;
    width: 25px;
    cursor: pointer;
	border-radius:10px;
    height: 25px;
	&:hover{
		background-color: #a6a6e8;
	}
    &:disabled{
        background-color: #f2ced3;
        pointer-events: none;
    }
	@media screen and (width>600px) and (width<=768px){
		width: 20px;
		height: 20px;
	}
	
`;

const QuantityInfo = styled.div`
    font-size: 15px;
    font-weight: bold;
	@media screen and (width>600px) and (width<=768px){
		font-size: 12px;
	}
`;

const PriceContainer = styled.div`
    display: flex;
    gap: 10px;
`;

const Price = styled.p`
	display: flex;
	align-items: center;
`;



function QuantityAndPrice(props) {

	const {totalprice,setTotalprice}=useContext(TotalPrice);
	const [itemcount, setItemcount] = useState(1);
	const price = Math.ceil(props.price * 100);
	const [currentprice, setCurrentPrice] = useState(price);

	useEffect(()=>{
		setTotalprice(totalprice+price)
	},[currentprice])

	const handleClick = (operation) => {
		if (operation === "increment") {
			setItemcount(itemcount + 1);
			const newprice=currentprice+price;
			setCurrentPrice(newprice);
			// setTotalprice(totalprice+price);
			props.item.quantity++;
		}
		else {
			setItemcount(itemcount - 1);
			const newprice=currentprice-price;
			setCurrentPrice(newprice);
			// setTotalprice(totalprice-price)
			props.item.quantity--;
		}
	}

	
	return (
			<Container>
				<InfoContainer>
					<TitleContainer>
						<Title>Quantity : </Title>
					</TitleContainer>
					<QuantityContainer>
						<Button disabled={itemcount < 2} onClick={() => { handleClick("decrement") }}>-</Button>
						<QuantityInfo>{itemcount}</QuantityInfo>
						<Button disabled={itemcount > 9} onClick={() => { handleClick("increment") }}>+</Button>
					</QuantityContainer>
				</InfoContainer>
				<InfoContainer>
					<Title>Price&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:</Title>
					<PriceContainer>
						<Price> <CurrencyRupee /> {currentprice}</Price>
					</PriceContainer>
				</InfoContainer>
			</Container>
	)
};

export default QuantityAndPrice;
import React, { useContext,useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import QuantityAndPrice from './QuantityAndPrice';

import { StoreCartContext } from '../../contexts/StoreAndCartContext';
import { TotalPrice } from '../../contexts/TotalPriceContext';


const Container = styled.div`
	display: flex;
	border-bottom: 2px solid black;
	margin-bottom: 20px;
	padding: 10px;
	padding-bottom: 15px;
	column-gap: 10px;
	@media screen and (width<=600px){
		flex-direction: column;
	}
`;

const ImageContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex: 1;
	@media screen and (width<=600px){
		margin-bottom: 10px;
	}
`;

const Image = styled.img`
	width: 90%;
	aspect-ratio: 1/1;
	@media screen and (width<=600px){
		width: 60%;
	}
	@media screen and (width<=426px){
		width: 100%;
	}
`;

const InfoContainer = styled.div`
	flex: 3;
`;

const Title = styled.h2`
	margin-bottom: 15px;
	color: #b40de0;
	@media screen and (width<=768px){
		font-size: 20px;
	}
`;

const RemoveButton = styled.button`
	cursor: pointer;
	border-radius: 5px;
	outline: none;
	border: 1px solid red;
	padding: 10px;
	font-size: 15px;
	transition: all .8s;
	color: red;
	&:hover{
		background-color: red;
		color: black;
	}
	@media screen and (width<=768px){
		font-size: 12px;
	}
`;


function CartItem(props) {
	const { totalprice, setTotalprice } = useContext(TotalPrice);
	const { cart, setCart } = useContext(StoreCartContext);
	const [toggledisplay, setToggledisplay] = useState(true);

	const removeFromCart = () => {
		setToggledisplay(false);
		props.item.isIncart = false;
		setTotalprice(totalprice - props.item.price * 100 * props.item.quantity)
		setCart(cart.filter((item) => {
			return item.id !== props.item.id;
		}))
	}

	return (
		<>
			{
				toggledisplay &&
				<Container>
					<ImageContainer>
						<Link to={`/product/${props.item.id}`} style={{ textDecoration: "none", color: "black", display: "flex", justifyContent: "center" }}><Image src={props.item.image}></Image></Link>
					</ImageContainer>
					<InfoContainer>
						<Link to={`/product/${props.item.id}`} style={{ textDecoration: "none", color: "black" }}>
							<Title>{props.item.title}</Title>
						</Link>
						<QuantityAndPrice price={props.item.price} item={props.item} />
						<RemoveButton onClick={removeFromCart}>Remove</RemoveButton>
					</InfoContainer>
				</Container>
			}
		</>
	)
}

export default CartItem
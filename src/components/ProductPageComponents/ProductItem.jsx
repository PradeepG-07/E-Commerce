import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { CurrencyRupee, Star } from '@mui/icons-material';
import { StoreCartContext } from '../../contexts/StoreAndCartContext';

const Container = styled.div`
	min-height: 80vh;
	display: grid;
	grid-template-columns: 1fr 1fr;
	@media screen and (width<768px){
		display: block;
	}
`;

const ImageContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 25px;
`;

const Image = styled.img`
	width: 90%;
	aspect-ratio: 1/1;
	@media screen and (width<768px){
		aspect-ratio: 1;
		
	}
`;
const InfoContainer = styled.div`
	flex: 1;
	padding: 25px;
`;

const Title = styled.h1`
	font-size: 30px;
	margin-bottom: 20px;
	color: #b40de0;
`;

const Description = styled.p`
	font-size: 18px;
	margin-bottom: 20px;
	line-height: 25px;
	overflow-wrap: break-word;
`;

const Price = styled.h2`
	color: #1db8fd;
	margin-bottom: 20px;
	display: flex;
	align-items: center;
`;
const Category = styled.h2`
	color: black;
	margin-bottom: 20px;

`;
const Rating = styled.h4`
	display: flex;
	align-items: center;
	gap: 5px;
	&::after{
		content: ' / 5.0';
	}
	color: ${props => props.value < 3 ? "red" : props.value <= 4 ? "#fcb045" : "green"};
	margin-bottom: 20px;
`;

const AddToCart = styled.button`
	background-color: pink;
	height: 50px;
	width: 100px;
	border-radius: 4px;
	outline: none;
	border: 1px solid black;
	cursor: pointer;
	
	&:hover{
		
		background-color: lightpink;
		
	}
`;

const InCart = styled.div`
	display: flex;
	align-items: center;
	gap: 20px;
	font-size: 20px;
	@media screen and (width<768px){
		flex-direction: column;
	}
`;
const Info = styled.div`
	color: green;
`;

const GoToCart = styled.button`
	padding: 10px;
	cursor: pointer;
	border-radius: 5px;
	transition: all .5s;
	background-color: royalblue;
	color: black;
	outline: none;
	font-weight: 400;
	border: 1px solid royalblue;
	&:hover{
		color: royalblue;
		background-color: transparent;
	}
`;



function Product(props) {
	const { cart, setCart } = useContext(StoreCartContext);
	function handleAddToCart() {
		props.item.quantity = 1;
		setCart([...cart, props.item]);
		props.item.isIncart = true;
		props.item.quantity = 1;
	}

	return (
		<Container>

			<ImageContainer>
				<Image src={props.item ? props.item.image : ""} alt='Image Not Available'>
				</Image>
			</ImageContainer>

			{props.item && <InfoContainer>
				<Title>{props.item.title}</Title>
				<Description> {props.item.description[0].toUpperCase() + props.item.description.slice(1,)} </Description>
				<Category>Category: {props.item.category[0].toUpperCase() + props.item.category.slice(1,)}</Category>
				<Rating value={props.item.rating.rate}> <Star /> {props.item.rating.rate}</Rating>
				<Price> <CurrencyRupee></CurrencyRupee>{props.item.price * 100}</Price>
				{
					!props.item.isIncart ?
						<AddToCart onClick={handleAddToCart}>
							Add to Cart
						</AddToCart> : <InCart >
							<Info>Item Added to Cart</Info>
							<Link to={'/cart'}><GoToCart>Go to Cart</GoToCart></Link>
						</InCart>
				}
			</InfoContainer>}
		</Container>
	)
}

export default Product;
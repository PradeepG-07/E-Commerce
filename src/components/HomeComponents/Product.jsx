import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { CurrencyRupee, Star } from '@mui/icons-material';

const Container = styled.div`
    margin: 10px;
    display: flex;
    flex-direction: column;
    transition: scale .5s;
	border-bottom: 1px solid black;
    @media screen and (width<=500px){
        margin: 0;
    }
    &:hover{
        scale: 1.1;
    }
`;

const Image = styled.img`
    width: 80%;
    aspect-ratio: 1/1;
    align-self: center;
	margin: 10px 0;
	mix-blend-mode: multiply;
    @media screen and (width<=310px){
        aspect-ratio: 1;
    }
`;

const Info = styled.div`
	display: flex;
	flex-direction: column;
	padding: 5px;
	display: flex;
	justify-content: center;
	margin: 5px;
`;

const Title = styled.h3`
	text-align: center;
	color: #b40de0;
`;

const Price = styled.h2`
	margin: 10px 0;
	padding-left:10px;
	display: flex;
	align-items: center;
	color: #1db8fd;
	`;

const Category = styled.h4`
	margin-bottom:10px;
	padding-left:10px;
	color: black;
`;

const Rating = styled.h4`
	padding-left: 10px;
	display: flex;
	align-items: center;
	gap: 5px;
	&::after{
		content: ' / 5.0';
	}
	color: ${props=>props.value<3?"red":props.value<=4?"#fcb045":"green"};
`;


function Product(props) {

	return (
		<Link to={`/product/${props.item.id}`} style={{ textDecoration: "none" }}>
			<Container>
				<Image src={`${props.item.image}`}></Image>
				<Info>
					<Title>{props.item.title}</Title>
					<Price> <CurrencyRupee/> {Math.ceil(props.item.price*100)}</Price>
					<Category>{props.item.category.toUpperCase()}</Category>
					<Rating value={props.item.rating.rate}> <Star /> {props.item.rating.rate}</Rating>
				</Info>
			</Container>
		</Link>
	)
}

export default Product;
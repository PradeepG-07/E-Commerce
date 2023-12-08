import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';


const Container=styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 20px;
	flex-direction: column;
`;

const Content=styled.h2`
	font-size	: 30px;
`;

const Button = styled.button`
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

function ItemsNotFound(props) {
  return (
    <Container>
		<Content>{props.info}</Content>
		{
			props.showBack&&<Link to={"/E-Commerce"}><Button>Back to Home</Button></Link>
		}
	</Container>
  )
}

export default ItemsNotFound
import React, { useContext} from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Badge } from '@mui/material';
import { Home, ShoppingBagOutlined } from '@mui/icons-material';
import Logo from '../../images/logo.png';
import {StoreCartContext} from '../../contexts/StoreAndCartContext';

const Container = styled.div`
    height: 11vh;
    border: 1px solid black;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding:10px;
	background-color: #ffbc52;
	
`;

const Left = styled.div`
    height: 96%;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const ImageContainer = styled.div`
	width:10vw;
	height: 100%;
	margin-left: 30px;
	cursor: pointer;
	@media screen and (width<=425px){
		margin-left: 0px;
		width: 100%;
	}
`;

const Image = styled.img`
    height: 100%;
    width: 100%;
    object-fit: cover;
	mix-blend-mode: multiply;
	filter: brightness(100%);
	
  
`;

const Center = styled.div`
	font-size: 25px;
	font-family: 'Courier New', Courier, monospace;
	font-weight: 600;
	text-align: center;
	padding: 0 5px;
	@media screen and (width<=500px)and (width>=430px){
		font-size: 20px;
	}
	@media screen and (width<430px){
		font-size: 15px;
	}

`;

const Right = styled.div`
	margin-right: 30px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	@media screen and (width<=425px){
		margin-right: 0px;
		
	}
`;


function Navbar(props) {
	const {cart}=useContext(StoreCartContext);
	return (
		<Container>
			<Left>
				<ImageContainer>
					<Link to={"/E-Commerce"}><Image src={Logo}></Image></Link>
				</ImageContainer>
			</Left>
			<Center>Pradeep's Online Store</Center>
			<Right>
				{props.home&&<Link to={"/E-Commerce"} style={{ textDecoration: "none",display:"flex"}}><Home style={{marginRight:"10px",fontSize:"25px",cursor:"pointer",color:"black"}}/></Link>}
				{!props.home&&<Link to={`/cart`}><Badge badgeContent={cart.length} color="secondary" >
					<ShoppingBagOutlined style={{cursor:"pointer",textDecoration:"none", color:"black"}}/>
				</Badge></Link>}
			</Right>
		</Container>
	)
}

export default Navbar;
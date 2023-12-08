import React from 'react';
import styled from 'styled-components';
import Navbar from '../components/GlobalComponents/Navbar';
import CartItems from '../components/CartComponents/CartItems';
import Billing from '../components/CartComponents/Billing';
import Footer from '../components/GlobalComponents/Footer';


const Container = styled.div``;

const ContentContainer = styled.div`
	display: grid;
	grid-template-columns: 2fr 1fr;
	@media screen and (width<=768px){
		grid-template-columns: 1fr;
		position: relative;
		
	}
`;

const FooterContainer=styled.div`
	@media screen and (width<768px){
		display:none;
	}
`;

function Cart() {
	return (
		<Container>
			<Navbar home={true} />

			<ContentContainer>
				<CartItems/>
				<Billing/>
			</ContentContainer>
			
			<FooterContainer>

			<Footer/>
			</FooterContainer>
		</Container>
	)
}

export default Cart;
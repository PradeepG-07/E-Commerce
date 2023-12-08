import React, { useContext } from 'react';
import styled from 'styled-components';
import { ArrowDownward, ArrowUpward } from '@mui/icons-material';
import { TotalPrice } from '../../contexts/TotalPriceContext';

const Container = styled.div`
	@media screen and (width<=768px){
		position: absolute;
		bottom: 0;
		background-color: #cccccc;
		width: 100%;	
	}
`;

const Accordion = styled.div`
	display: none;
	padding: 10px;
	justify-content: space-between;
	flex-wrap: wrap;
	@media screen and (width<=768px){
		display	: flex ;
	}
`;

const Title = styled.h2`
	display: inline-block;
	font-size: 15px;
`;

const ToggleContainer = styled.div`
	position: relative;
	width: 20px;
	height: 20px;
	&:has(input:checked)+ div{
		display: block;
	}
`;

const ToggleLogo = styled.label`
	cursor: pointer;
	position: absolute;
	top: 50%;
	left: 50%;
	width:100%;
	height: 100%;
	transform: translate(-60%,-60%);
`;

const ToggleBilling = styled.input`
	width:100%;
	height: 100%;
	font-size: 20px;
	visibility: hidden;
	&:checked + label {
		display: none;
	}
	&:checked + label +label{
		display: block ;
	}
	&:not(:checked) + label +label{
		display: none ;
	}
`;

const BillingDetails = styled.div`
	width: 100%;
	height: 35vh;
	display: none;
	
`;

const InfoContainer = styled.div`
	padding: 10px;
	@media screen and (width<=768px) {
		display: none;
	}
`;

const BillingHeading = styled.h1`
	display: block;
	text-align: center;
	color: #1F271B;
	margin-bottom: 40px;
	text-decoration: underline;
	@media screen and (width<=768px) {
		display: none;
	}
`;

const BillingInfo = styled.p`
	color: #1F271B;
	font-size: 18px;
	margin-bottom: 10px;
	display: flex;
	justify-content: space-between;
	@media screen and (width<=768px) {
		margin: 10px 0;
	}
`;

const Info=styled.span`

`;

const Button = styled.button`
	cursor: pointer;
	border-radius: 5px;
	outline: none;
	border: 1px solid green;
	padding: 10px;
	font-size: 15px;
	transition: all .8s;
	color: green;
	background-color: transparent;
	margin: 10px;
	&:hover{
		background-color: green;
		color: black;
	}
	@media screen and (width<=768px){
		font-size: 12px;
	}
`;

function Billing(props) {
	const {totalprice}=useContext(TotalPrice);

	const handleClick=()=>{
		if(totalprice>0){
			alert("Payment page will be added soon.");
		}
		else{
			alert("Cart is empty cannot proceed for payment.");
		}
	}

	return (
		<Container>
			<Accordion>
				<Title>Billing Details</Title>
				<ToggleContainer>
					<ToggleBilling type='checkbox' id='toggle'></ToggleBilling>
					<ToggleLogo htmlFor='toggle'><ArrowUpward /> </ToggleLogo>
					<ToggleLogo htmlFor='toggle'><ArrowDownward /> </ToggleLogo>
				</ToggleContainer>
				<BillingDetails>
					<BillingHeading>Cart Analysis</BillingHeading>
					<BillingInfo> <Info>Total Cost</Info><Info>{totalprice>0?`+${totalprice}`:0}</Info> </BillingInfo>
				<BillingInfo> <Info>Shipping Cost</Info><Info>{totalprice>0?"+200":0}</Info> </BillingInfo>
				<BillingInfo> <Info>Shipping Discount</Info><Info>{totalprice>0?"-200":0}</Info> </BillingInfo>
				<BillingInfo> <Info>Total Amount</Info><Info>{totalprice}</Info> </BillingInfo>
					<Button onClick={handleClick}>Click To Pay</Button>
				</BillingDetails>
			</Accordion>

			<InfoContainer>
				<BillingHeading>Cart Analysis</BillingHeading>
				<BillingInfo> <Info>Total Cost</Info><Info>{totalprice>0?`+${totalprice}`:0}</Info> </BillingInfo>
				<BillingInfo> <Info>Shipping Cost</Info><Info>{totalprice>0?"+200":0}</Info> </BillingInfo>
				<BillingInfo> <Info>Shipping Discount</Info><Info>{totalprice>0?"-200":0}</Info> </BillingInfo>
				<BillingInfo> <Info>Total Amount</Info><Info>{totalprice}</Info> </BillingInfo>
				<Button onClick={handleClick}>Click To Pay</Button>
				
			</InfoContainer>
		</Container>
	)
}

export default Billing;
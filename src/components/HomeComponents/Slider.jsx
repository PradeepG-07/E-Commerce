import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material';
import React, { useState } from 'react'
import styled from 'styled-components'

const Container = styled.div`
	height: 83vh;
	overflow: hidden;
`;

const Wrapper = styled.div`
	width: 100vw;
	height: 100%;
	position: relative;
	display: flex;
	transition: all .5s;
`;

const Arrow = styled.div`
	width: 40px;
	height: 40px;
	border-radius: 50%;
	background-color: rgba(0,0,0,0.5);
	opacity: .5;
	cursor: pointer;
	position: absolute;
	top: 55%;
	z-index: 3;
	left: ${props => props.direction === 'left' && "10px"};
	right: ${props => props.direction === 'right' && "10px"};
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 20px;
	transition: all .5s;
	&:hover{
		opacity: 1;
		scale: 1.1;
	}

`;

const ArrowIcon = styled.p`
	color: white;
	display: flex;
	justify-content: center;
	align-items: center;
`

const ImageContainer = styled.div`
	height: 100%;
	width: 100%;
	position: relative;
	cursor: pointer;
`;

const Image = styled.img`
	height: 100%;
	width: 100vw;
	object-fit: fill;
	object-position: center;
	position: relative;
	z-index: 1;
	opacity: .7;
	
`;

const InfoContainer = styled.div`
	width: 100%;
	height: 10%;
	position: absolute;
	bottom: 0;
	left: 50%;
	z-index: 1;
	display: flex;
	align-items: center;
	justify-content: center;
	transform: translateX(-50%);
	border: 1px solid black;
	transition: all .5s;
	background-color: #1B1B3A;
	opacity: 0;
	${ImageContainer}:hover & {
		opacity: 1;
	}
`;

const InfoTitle = styled.h1`
	font-size: 30px;
	color: #7918ec;
	text-align: center;
	
	
`;



function Slider() {
	const [index, setIndex] = useState(0);
	function handleClick(direction) {
		if (direction === "left") {
			index > 0 ? setIndex(index - 1) : setIndex(2);
		}
		else {
			index < 2 ? setIndex(index + 1) : setIndex(0);
		}
	}
	return (
		<Container>
			<Arrow direction="left" onClick={() => { handleClick('left') }} >
				<ArrowIcon>
					<KeyboardArrowLeft />
				</ArrowIcon>
			</Arrow>


			<Wrapper style={{ transform: `translateX(${index * -100}vw)`,scrollBehavior:"smooth" }} onClick={()=>{window.scrollTo(0,600)}}>
				<ImageContainer>
					<Image src='https://cdn.pixabay.com/photo/2017/07/02/19/24/dumbbells-2465478_1280.jpg'></Image>
					<InfoContainer>
						<InfoTitle>
							Dumb Bells
						</InfoTitle>
					</InfoContainer>
				</ImageContainer>

				<ImageContainer>
					<Image src='https://cdn.pixabay.com/photo/2015/09/07/20/55/coffee-shop-929101_1280.jpg'></Image>
					<InfoContainer>
						<InfoTitle>
							Coffee Shop
						</InfoTitle>
					</InfoContainer>
				</ImageContainer>

				<ImageContainer>
					<Image src='https://cdn.pixabay.com/photo/2015/01/18/13/31/tablet-602968_1280.jpg'></Image>
					<InfoContainer>
						<InfoTitle>
							Tablets
						</InfoTitle>
					</InfoContainer>
				</ImageContainer>
			</Wrapper>


			<Arrow direction="right" onClick={() => { handleClick('right') }} >
				<ArrowIcon>
					<KeyboardArrowRight />
				</ArrowIcon>
			</Arrow>
		</Container>
	)
}

export default Slider;
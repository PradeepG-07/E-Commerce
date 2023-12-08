import React from 'react'
import styled from 'styled-components'


const Container = styled.div`
	text-align: center;
	padding: 10px;
	background-color: #1bad99;
`;

const AnnouncementInfo=styled.p`
	animation: flash 0.5s alternate infinite;
	@keyframes flash {
		0%{
			opacity: 0;
		}
		100%{
			opacity: 1;
		}
	}
`;

function Announcement() {
	return (
		<Container>
			<AnnouncementInfo>80% OFF - Black Friday Sale </AnnouncementInfo>
		</Container>
	)
}

export default Announcement;
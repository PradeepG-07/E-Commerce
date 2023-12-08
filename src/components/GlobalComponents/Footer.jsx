import React from 'react';
import styled from 'styled-components';

const Container=styled.div``;

const Info=styled.div`
    padding: 20px;
    background-color: #2E4057;
    text-align: center;
    color: #B9BAA3;
    font-size: 20px;
`;

function Footer() {
  return (
    <Container>
        <Info>
            Designed By Pradeep
        </Info>
    </Container>
  )
}

export default Footer;

import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";


const Container = styled.header`
  
  
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;





const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
  
  
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  
`;



const Llink = styled(Link)`
text-decoration: none;
color: inherit;
`;

const NavH = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          
          
        </Left>
        <Center>
          <Llink to="/">
          <Logo>Crop Shop Garden</Logo>
          </Llink>
        </Center>
        <Right>
          
          
        </Right>
      </Wrapper>
    </Container>
  );
};

export default NavH;

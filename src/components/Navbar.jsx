import { Badge } from "@material-ui/core";
import { ShoppingCartOutlined } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";


const Container = styled.header`
  height: 60px;
  
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

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  
`;

const Llink = styled(Link)`
text-decoration: none;
color: inherit;
`;

const Navbar = () => {
  // const quantity = useSelector((state) => state.cart.totalQuantity);
  
  
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
          <Llink to="/KBC">
          <MenuItem>REGISTER</MenuItem>
          </Llink>
          <Llink to="/About">
          <MenuItem>ABOUT US</MenuItem>
          </Llink>
          <Llink to="/Login">
          <MenuItem>SIGN IN</MenuItem>
          </Llink>
          <MenuItem>
          {/* <Badge badgeContent={quantity} color="primary"> */}
          <Badge badgeContent={69} color="primary">
             <Llink to="/CheckOut"> <ShoppingCartOutlined /> </Llink>
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;

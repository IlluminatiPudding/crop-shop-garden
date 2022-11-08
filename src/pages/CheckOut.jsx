import { AddCircleOutline, RemoveCircleOutline } from "@material-ui/icons";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useSelector, useDispatch } from "react-redux";
import { actions } from "./store/counter";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";



const Container = styled.div``;

const Wrapper = styled.div`
  padding: 20px;
  
`;

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;


const Llink = styled(Link)`
text-decoration: none;
color: inherit;
`;


const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  

`;

const Info = styled.div`
  flex: 3;
  padding: 0px;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;

const Image = styled.img`
  width: 350px;
`;

const Details = styled.div`
  padding: 30px 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ProductName = styled.p``;

const ProductId = styled.p``;



const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
  
`;

const ProductPrice = styled.p`
  font-size: 30px;
  font-weight: 200;
  
`;



const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
`;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;

const SummaryItemText = styled.p`
 text-color
`;

const SummaryItemPrice = styled.p``;

const Bbutton = styled.button`
  width: 200px;
  height: 60px;
  padding: 10px;
  background-color: green;
  color: white;
  font-weight: 500;
`;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
`;

const CheckOut = () => {
  const caw = useSelector((state)=>state.counter);
  const dispatch = useDispatch();
  const inc = () => {
    dispatch(actions.increment());
  }
  const dec = () => {
    dispatch(actions.decrement());
  }
  const cartItems = useSelector((state) => state.cart.itemsList);
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <Title>YOUR GARDEN</Title>
        {/* <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            {" "}
            <CartItem
              quantity={item.quantity}
              id={item.id}
              price={item.price}
              total={item.totalPrice}
              name={item.name}
            />{" "}
          </li>
        ))}
      </ul> */}
        <Bottom>
          <Info>
            
           
            <Product>
              <ProductDetail>
                <Image src="https://images.unsplash.com/photo-1586201375761-83865001e31c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cmljZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=700&q=60" />
                <Details>
                  <ProductName>
                    <b>Product:</b> RICE
                  </ProductName>
                  <ProductName>
                    <b>Price/Kg:</b> Rs.12
                  </ProductName>
                  <ProductId>
                    <b>State:</b> PUNJAB
                  </ProductId>
                  
                  
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <AddCircleOutline fontSize="large" onClick={inc} />
                  <ProductAmount>{(caw)}</ProductAmount>
                  <RemoveCircleOutline fontSize="large" onClick={dec} />
                </ProductAmountContainer>
                <ProductPrice>Rs.{12*(caw)}</ProductPrice>
              </PriceDetail>
            </Product>
            <Llink to="/ProductList"><Bbutton>ADD MORE TO GARDEN</Bbutton></Llink>
          </Info>
          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>Rs.{12*(caw)}</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated Shipping</SummaryItemText>
              <SummaryItemPrice>Rs 5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping Discount</SummaryItemText>
              <SummaryItemPrice>Rs -5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>Rs.{12*(caw)}</SummaryItemPrice>
            </SummaryItem>
            <Button>CHECKOUT NOW</Button>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};


export default CheckOut;

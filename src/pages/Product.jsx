
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";



const Container = styled.div``;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  
`;

const ImgContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
  
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
  
`;

const Title = styled.h1`
  font-weight: 200;
`;

const Desc = styled.p`
  margin: 20px 0px;
`;



const FilterContainer = styled.div`
  width: 50%;
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
`;

const FilterTitle = styled.span`
  font-size: 15px;
  font-weight: 400;
`;



const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
`;

const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  
`;



const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;

const Button = styled.button`
  padding: 15px;
  border: 2px solid teal;
  background-color: teal;
  cursor: pointer;
  font-weight: 500;

  &:hover{
      background-color: teal;
  }
`;

const Product = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <ImgContainer>
          <Image src="https://images.unsplash.com/photo-1586201375761-83865001e31c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cmljZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=700&q=60" />
        </ImgContainer>
        <InfoContainer>
          <Title>Rice</Title>
          <Desc>
            Nutritious white rice.<br/>
            Each grain size is between 3mm-3.5mm(dry).<br/>
            Available in 5 Location.
          </Desc>
          
          
          <FilterContainer>
            
            <Filter>
              <FilterTitle>Crop Rate Based On Location</FilterTitle>
              <FilterSize>
                <FilterSizeOption>Rs 12/kg Panjab</FilterSizeOption>
                <FilterSizeOption>Rs 22/kg Haryana</FilterSizeOption>
                <FilterSizeOption>Rs 15/kg Assam</FilterSizeOption>
                <FilterSizeOption>Rs 18/kg Bihar</FilterSizeOption>
                <FilterSizeOption>Rs 12/kg Kerala</FilterSizeOption>
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            
            <Button><Link to="/CheckOut">BUY NOW</Link></Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      
      <Footer />
    </Container>
  );
};

export default Product;

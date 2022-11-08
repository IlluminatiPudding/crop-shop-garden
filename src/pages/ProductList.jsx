import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Products from "../components/Products";
// import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";


const Container = styled.div``;

const Title = styled.h1`
  margin: 20px;
  display: flex;
  justify-content: center;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;

`;

const Filter = styled.div`
  margin: 20px;
  
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
  
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  overflow: scroll;
  
`;
const Option = styled.option`

`;

const ProductList = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Title>Crop Garden</Title>
      {/* <FilterContainer>
        <Filter>
          <FilterText>Filter Products:</FilterText>
          <Select>
            <Option disabled selected>
              Season
            </Option>
            <Option>Kharif</Option>
            <Option>Rabi</Option>
            <Option>Zaid</Option>
            
          </Select>
          <Select>
            <Option disabled selected>
              States
            </Option>
            <Option>Assam</Option>
            <Option>Punjab</Option>
            <Option>Bihar</Option>
            <Option>Jharkhand</Option>
            <Option>Haryana</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products:</FilterText>
          <Select>
            
            <Option>Price (asc)</Option>
            <Option>Price (desc)</Option>
          </Select>
        </Filter>
      </FilterContainer> */}
      <Products />
      
      <Footer />
    </Container>
  );
};

export default ProductList;

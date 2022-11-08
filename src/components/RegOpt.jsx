
import styled from "styled-components";
import { regOptions } from "../data";


const Container = styled.div`
  flex: 1;
  margin: 3px;
  height: 70vh;
  position: relative;
`;



const Wrapper = styled.div`
  height: 100%;
  display: flex;
  
`;

const Slide = styled.div`
  
  display: flex;
  align-items: center;
  background-color: #${(props) => props.bg};
`;




const InfoContainer = styled.div`
  display: flex;
 
`;

const Title = styled.h1`
  font-size: 70px;
`;

const Desc = styled.p`
  margin: 50px 0px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
`;

const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
`;


const RegOpt = () => {
  return (
    <Container>
      <Wrapper>
        {regOptions.map((item) => (
          <Slide bg={item.bg} key={item.id}>
            
            <InfoContainer>
              <Title>{item.title}</Title>
              <Desc>{item.desc}</Desc>
              <Button>DEAL NOW</Button>
            </InfoContainer>
          </Slide>
        ))}
      </Wrapper>     
    </Container>
  );
};

export default RegOpt;

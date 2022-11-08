import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import styled from "styled-components";
import Aabout from "../components/Aabout";



const Container = styled.div`
  width: 100vw;
  height: 100vh;
  
  
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Title = styled.h1`
  margin: 20px;
  display: flex;
  justify-content: center;
`;
const Wrapper = styled.div`
height: 100%;
justify-content: center;
padding: 80px 150px;
margin: 100px
background-color: teal;
`;



const About = () => {
  return (
    <div>
        
    <Navbar />
    <Container>
        <Wrapper>
    <Title>ABOUT US</Title>
   <Aabout />
   </Wrapper>
   </Container>
    <Footer />
    
    </div>
  )
}

export default About
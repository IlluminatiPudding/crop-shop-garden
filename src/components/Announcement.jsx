import styled from "styled-components";

const Container = styled.div`
  height: 30px;
  background-color: #FF8C00;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
`;

const Announcement = () => {
  return <Container>GET THE BEST DEALS FROM FARMERS ALL IN INDIA! NOW IT'S JUST BETWEEN YOU AND THE FARMERS.</Container>;
};

export default Announcement;

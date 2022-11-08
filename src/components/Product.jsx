import { LocalMallTwoTone,} from "@material-ui/icons";
  import styled from "styled-components";
  import { Link } from "react-router-dom";
  
  
  const Info = styled.div`
    opacity: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.2);
    z-index: 3;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.5s ease;
    cursor: pointer;
  `;
  
  const Container = styled.div`
    flex: 1;
    margin: 5px;
    min-width: 280px;
    height: 350px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f5fbfd;
    position: relative;
  
    &:hover ${Info} {
      opacity: 1;
    }
  `;
  
  
  
  const Image = styled.img`
  width: 260px;
  height: 330px;
    z-index: 2;
    object-fit: cover
  `;
  
  const Icon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;
    transition: all 0.5s ease;
    &:hover {
      background-color: #e9f5f5;
      transform: scale(1.1);
    }
  `;
  
  const Tags=styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px;
  
  `
  const Tag=styled.div`
  padding: 0px;
  display:flex;
  justify-content: space-around;
  `
  const N=styled.div`
  padding: 10px;
  display:flex;
  
  `
  const P=styled.div`
  padding: 10px;
  display:flex;
  
  `
  const B=styled.b`
  padding: 0px 5px;
  
  
  `

  
  const Product = ({ item, key, price, img, name}) => {
    return (
      <Container>
        <Tags>
          
        
        <Image src={item.img} />
        <Info>
          <Icon>
            <Link to="/Product"><LocalMallTwoTone /></Link>
          </Icon>          
        </Info>
        
        <Tag><N><b>{name}</b></N><P><B>Price:</B>Rs.{price}</P></Tag></Tags>
      </Container>
    );
  };
  
  export default Product;
  
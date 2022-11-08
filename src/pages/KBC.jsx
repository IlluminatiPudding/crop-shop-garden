import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  max-width: 100%;
 
  align-items: center;
  justify-content: space-between;
  object-fit: cover;
`;

const Farmer=styled.div`



flex: 1;
align-items: left;
justify-content: center;

object-fit: cover;
`;
const Admin=styled.div`

padding: 20px;
flex: 1;
align-items: center;
justify-content: center;

object-fit: cover;
`;
const Dealer=styled.div`


flex: 1;
align-items: center;
justify-content: flex-end;

object-fit: cover;
`;

const Llink = styled(Link)`
text-decoration: none;
color: inherit;
`;


const KBC = () => {
  return (
    <div>
     
      <Navbar />
      <Wrapper>
      <Farmer>
        <Llink to="/Register"><img width="100%" src="https://media.istockphoto.com/photos/low-angle-view-at-farmer-feet-in-rubber-boots-walking-along-maize-picture-id1326644171?b=1&k=20&m=1326644171&s=170667a&w=0&h=jgLJD6Bp-8V3GUONIiFlpGnvp185TCJLMDvKPFiFri4=" /></Llink>
      </Farmer>
      <Admin>
      <Llink to="/Admin"><img width="100%" src="https://fiverr-res.cloudinary.com/t_main1,q_auto,f_auto/gigs/125568526/original/cd9c93141521436a112722e8c5c0c7ba0d60a4a2.jpg" /></Llink>
      </Admin>
      <Dealer>
      <Llink to="/Dealer"><img width="100%" object-fit="cover" height="275px" src="https://media.istockphoto.com/photos/package-boxes-on-pallets-loading-into-cargo-container-trucks-parked-picture-id1325350394?b=1&k=20&m=1325350394&s=170667a&w=0&h=BGi-oKh_zSaSjp8kqxDrHP5r55qyBdg54BLVFY3-6HM=" /></Llink>
      </Dealer>
      </Wrapper>
      
     
      <Footer/>
    </div>
  );
};

export default KBC;

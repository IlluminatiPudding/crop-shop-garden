import styled from "styled-components";

const Container = styled.div`
width: 100%;
height: 100vh;
display: flex;

flex-direction: column;

`;
const Titl = styled.div`
  width: 100%;
  
  padding: 10px ;
  display: flex;
  
 
 
`;

const Aabout = () => {
  return (
    <Container>
      <Titl>
Now a days we can see how much struggle the farmers are facing to sell their crop for proper price in the market. Farmer must bear the cost of transportation, wait time, negotiations for proper price, etc. 
Even though farmer sells the product in market, they must pay lot of intermittent charges as commissions to make his way to the market to earn a fair living.
</Titl>
<Titl>
Develop a platform (Android/iOS app) which helps the farmers to sell their product directly to dealers from Farm. 
The App should act as a bridge between the Farmer and the Dealer (Crop purchaser). All you need to do is selecting whether you are a Farmer or the Dealer, signing up with details and the payment information. There is no need for the farmer to carry the crop till the market, paying unexpected commissions and wait for proper price from the Dealers. Whenever farmer want to sell the vegetables/fruits at the Farm itself, he just wants to select the type of Crop, quantity available, input the location/address and publish the information to Dealers. Whoever(Dealer) is interested in purchasing will connect with the Farmer, will reach the location, checks the quality of the crop, negotiates the price, weighs the crop and payment will be done to the farmer from the App itself which will be more transparent rather than paying tolls/commissions.
</Titl>
    </Container>
         
  )
}

export default Aabout
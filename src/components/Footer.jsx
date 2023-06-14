import React from 'react'
import styled from 'styled-components'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import { mobile } from "../responsive"


const Container = styled.div`
   display: flex;
  ${mobile({ flexDirection: 'column'})}


`


const Left = styled.div`
   flex: 1; 
   display: flex;
   flex-direction: column;
   padding: 20px;
  
`


const Logo = styled.h1`
   
`
const Desc = styled.p`
   margin:20px 0px;
`
const SocialContainer = styled.div`
   display: flex;
`
const SocialIcon = styled.div`
   width: 40px;
   height: 40px;
   border-radius: 50%;
   color: white;
   background-color:#${props=>props.color};
   display: flex;
   align-items: center;
   justify-content: center;
   margin-right: 20px;
   transition: all 0.5s ease;

   &:hover{
     transform: scale(1.1);
   }
`


const Center = styled.div`
   flex: 1; 
   padding: 20px;
   ${mobile({ display: 'none'})}
`

const Title = styled.h3`
   margin-bottom: 30px;
`

const List = styled.ul`
    margin:0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`


const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
`
    


const Right = styled.div`
   flex:1;
   padding: 20px;
   ${mobile({ backgroundColor: '#f6ecec'})}
`

const ContactItem = styled.div`
   margin-bottom: 20px;
   display: flex;
   align-items: center;
`


const Payment = styled.img`
   width: 50%;
`


const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>BrandWay</Logo>
        <Desc>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis autem consequuntur, doloribus doloremque iure praesentium exercitationem quae iste non earum, neque est itaque facere quod eius a recusandae voluptate facilis similique odio suscipit delectus error repellat vel? Ducimus at nisi qui obcaecati provident libero, distinctio magnam. Nulla error autem sint.
        </Desc>
        <SocialContainer>
            <SocialIcon color="3B5999">
              <FacebookIcon />
            </SocialIcon>
            <SocialIcon color="E4405F">
              <InstagramIcon />
            </SocialIcon>
            <SocialIcon color="55ACEE">
              <TwitterIcon/>
            </SocialIcon>
            <SocialIcon color="E60023">
                <PinterestIcon/>
            </SocialIcon>
        </SocialContainer>
    </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
            
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Man Fashion</ListItem>
          <ListItem>Woman Fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>
            
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <LocationOnIcon style={{marginRight:"10px"}}/>  555 SouthPark Family Guy street
        </ContactItem>
        <ContactItem>
          <PhoneIcon  style={{marginRight:"10px"}}/> +1 568 79 457
        </ContactItem>
        <ContactItem>
          <EmailIcon  style={{marginRight:"10px"}}/> contact@example.com
        </ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png"/>
      </Right>
    </Container>
  )
}

export default Footer